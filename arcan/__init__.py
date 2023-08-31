# %%
from fastapi import Depends

# from fastapi.responses import StreamingResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from modal import Image, Secret, Stub, web_endpoint

from arcan.agent.chains import ArcanConversationChain
from arcan.agent.scrapping import url_text_scrapper
from arcan.agent.vectorstores import faiss_text_index_loader, load_faiss_vectorstore
from arcan.session.auth import requires_auth

auth_scheme = HTTPBearer()


__version__ = "1.5.0"


# %%
def get_arcan_version():
    try:
        import arcan

        return arcan.__version__
    except Exception as e:
        print(e)
        return "No arcan package is installed"


# %%
image = Image.debian_slim().pip_install(
    "fastapi",
    "uvicorn",
    "databricks_session",
    "arcan",
    # scraping pkgs
    "beautifulsoup4",
    "httpx",
    "lxml",
    # langchain pkgs
    "faiss-cpu",
    "langchain",
    "openai",
    "tiktoken",
)
# api = FastAPI()
stub = Stub(
    name="arcan",
    image=image,
    secrets=[Secret.from_name("openai-secret")],
)


@stub.function()
@web_endpoint(method="GET", custom_domains=["app.arcanai.tech"])
# @api.get("/")
def entrypoint():
    return {"message": "Arcan is running"}


@stub.function()
@web_endpoint(method="GET", custom_domains=["version.arcanai.tech"])
# @api.get("/api/version")
def version():
    print("Arcan is installed")
    # return the installed version of Arcan package from the pyproject.toml file
    version = get_arcan_version()
    return {"message": f"Arcan version {version} is installed"}


chain = ArcanConversationChain()
docsearch = None
job_domain = None


def url_text_scrapping_chain(query: str, url: str) -> tuple[str, list[str]]:
    global docsearch, job_domain, chain
    print(docsearch, job_domain)
    text, current_domain = url_text_scrapper(url)
    if not docsearch and current_domain != job_domain:
        try:
            print("Loading index")
            job_domain = current_domain
            docsearch = load_faiss_vectorstore(index_key=current_domain)
        except Exception as e:
            print(f"Error loading index: {e}, creating new index")
            docsearch = faiss_text_index_loader(text=text, index_key=current_domain)
    print("Running chain")
    return chain.run(query, docsearch)


@stub.function(secret=Secret.from_name("web-auth-token"))
@web_endpoint(method="GET", custom_domains=["text-chat.arcanai.tech"])
@requires_auth
def text_chat(
    query: str,
    context_url: str,
    token: HTTPAuthorizationCredentials = Depends(auth_scheme),
):
    # answer = StreamingResponse(url_text_scrapping_chain(query=query, url=context_url), media_type="text/event-stream")
    answer = url_text_scrapping_chain(query=query, url=context_url)
    return {
        "answer": answer,
    }


# @stub.function()
# def qanda_cli(query: str, show_sources: bool = False, context_url: str = None):
#     answer, sources = url_text_scrapping_chain(query=query, url=context_url)
#     # Terminal codes for pretty-printing.
#     bold, end = "\033[1m", "\033[0m"

#     print(f"🦜 {bold}ANSWER:{end}")
#     print(answer)
#     if show_sources:
#         print(f"🔗 {bold}SOURCES:{end}")
#         for text in sources:
#             print(text)
#             print("----")
