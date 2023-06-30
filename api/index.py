from fastapi import FastAPI
from arcan import entrypoint

app = FastAPI()

@app.get("/")
def main():
    return entrypoint()