# %%
from modal import Stub, web_endpoint
from modal import Image, Stub, web_endpoint

__version__ = "1.3.8"


# %%
# %%
def get_arcan_version():
    try:
        import arcan

        return arcan.__version__
    except Exception as e:
        print(e)
        return f"No arcan package is installed"


# %%
image = Image.debian_slim().pip_install(
    "fastapi", "uvicorn", "databricks_session", "arcan"
)
# api = FastAPI()
stub = Stub(
    name="arcan",
    image=image,
)


@stub.function()
@web_endpoint(method="GET")
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
