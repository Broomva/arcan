<p align="center">
  <a href="https://vercel.com/broomva/arcan">
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="96">
    <h3 align="center">arcan</h3>
  </a>
</p>

<p align="center">Next.js & FastAPI Vercel Arcan Deployment. Check out source template at <a href="https://github.com/digitros/nextjs-fastapi">Vercel Template</a>.</p>

<br/>

# Arcan
**A multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools**


## Setup

### Quick Install

```shell
python -m pip install arcan
```

### Build from source

Clone the repository

```shell
git clone https://github.com/Broomva/arcan.git
```

Install the package

``` shell
cd arcan && make install
```

### Build manually

After cloning, create a virtual environment

```shell
conda create -n arcan python=3.10
conda activate arcan
```

Install the requirements

```shell
pip install -r requirements.txt
```

Run the python installation

```shell
python setup.py install
```

## Usage

The deployment requires a .env file created under local folder:

```shell
touch .env
```

It should have a schema like this:

```toml
databricks_experiment_name=''
databricks_experiment_id=''
databricks_host=''
databricks_token=''
databricks_username=''
databricks_password=''
databricks_cluster_id=''
```

```python
import arcan 

# Create a Spark session
spark = DatabricksSparkSession().get_session()

# Connect to MLFLow Artifact Server
mlflow_session = DatabricksMLFlowSession().get_session()
```



## Introduction

This is a hybrid Next.js + Python app that uses Next.js as the frontend and FastAPI as the API backend. One great use case of this is to write Next.js apps that use Python AI libraries on the backend.

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/arcan/blob/main/next.config.js) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

https://arcan-starter.vercel.app/

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdigitros%2Farcan%2Ftree%2Fmain)

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app arcan --example "https://github.com/digitros/arcan"
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

#"fastapi-dev": "poetry install && python -m uvicorn api.index:app --reload",

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - learn about FastAPI features and API.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Attribution
This is a forked implementation for the Github repositories. Check out the attribution list:
https://github.com/digitros/nextjs-fastapi