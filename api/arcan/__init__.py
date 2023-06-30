# %%
from fastapi import FastAPI
from modal import Stub, web_endpoint
from modal import Image, Stub, web_endpoint
import toml, os


# %%
# %%
def get_arcan_version():
    try:
        package_root = os.path.abspath(
            os.path.join(os.path.dirname(__file__), "..", "..")
        )
        print(package_root)
        with open(os.path.join(package_root, "pyproject.toml"), "r") as f:
            pyproject = toml.load(f)
            return pyproject["tool"]["poetry"]["version"]
    except Exception as e:
        print(e)
        return f"No pyproject.toml file found {e}"


# %%
image = Image.debian_slim().pip_install("fastapi", "uvicorn", "databricks_session")

stub = Stub(
    name="arcan",
    image=image,
)


@stub.function()
@web_endpoint(method="GET")
def main():
    return {"message": "Arcan is installed"}


@stub.function()
@web_endpoint(method="GET")
def version():
    print("Arcan is installed")
    # return the installed version of Arcan package from the pyproject.toml file
    version = get_arcan_version()
    return {"message": f"Arcan version {version} is installed"}


# %%
