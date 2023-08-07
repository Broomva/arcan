# %%
from fastapi import Depends, Header, HTTPException, Request, status
from fastapi.security import (APIKeyHeader, HTTPAuthorizationCredentials,
                              HTTPBearer)
from modal import Image, Secret, Stub, create_package_mounts, web_endpoint

from arcan.agent.qanda import qanda_langchain

auth_scheme = HTTPBearer()


__version__ = "1.3.9"

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
@web_endpoint(method="GET") #, custom_domains=["arcanapp.io"])
# @api.get("/")
def entrypoint():
    return {"message": "Arcan is running"}


@stub.function()
@web_endpoint(method="GET")
# @api.get("/api/version")
def version():
    print("Arcan is installed")
    # return the installed version of Arcan package from the pyproject.toml file
    version = get_arcan_version()
    return {"message": f"Arcan version {version} is installed"}


# %%


@stub.function(secret=Secret.from_name("web-auth-token"))
@web_endpoint(method="GET")
def qanda(query: str, context_url: str, show_sources: bool = False, token: HTTPAuthorizationCredentials = Depends(auth_scheme)):
    import os

    print(os.environ["AUTH_TOKEN"])

    if token.credentials != os.environ["AUTH_TOKEN"]:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect bearer token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    answer, sources = qanda_langchain(query=query, url=context_url)
    if show_sources:
        return {
            "answer": answer,
            "sources": sources,
        }
    else:
        return {
            "answer": answer,
        }


@stub.function()
def qanda_cli(query: str, show_sources: bool = False, context_url: str = None):
    answer, sources = qanda_langchain(query=query, url=context_url)
    # Terminal codes for pretty-printing.
    bold, end = "\033[1m", "\033[0m"

    print(f"🦜 {bold}ANSWER:{end}")
    print(answer)
    if show_sources:
        print(f"🔗 {bold}SOURCES:{end}")
        for text in sources:
            print(text)
            print("----")

