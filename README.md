# Arcan: AI Driven Data Pipeline Orchestration

<p align="center">
  <a href="https://arcanapp.io">
    <img src="public/arcan.png" height="96">
    <h3 align="center"></h3>
  </a>
</p>

<p align="center">Your data bridging concierge. Leverage AI to integrate diverse big and small data stack tools with ease. Visit our live demo at <a href="https://arcanapp.io/">arcanapp.io</a>.</p>

<br/>

# Introduction
Arcan is an innovative open-source solution designed to bridge modern and legacy data stack tools through a multiheaded package based on a smart pipeline generation and orchestration. Leveraging a hybrid Next.js + Python app, arcan provides a user-friendly interface for you to request data pipelines creation using natural language, Arcan simplifies and enhances your data operations.

## Overview

Leverage AI and pipeline manifests to integrate diverse data stack tools with ease. Check out our live demo at [arcanapp.io](https://arcanapp.io/).

## Installation

### Quick Install

    python -m pip install arcan

### Build from Source

    git clone https://github.com/Broomva/arcan.git
    cd arcan &&  make build

### Manual Build

    conda create -n arcan python=3.10
    conda activate arcan
    pip install -r requirements.txt
    python setup.py install

## Building the Next.js App

To clone the repository and create the Next.js app, you can use the following commands:

    npx create-next-app arcan --example "https://github.com/Broomva/arcan"

Once you have cloned the repository and created the app, install the dependencies:

    yarn install

After that, you can run the development server:

    yarn dev
    # or
    make rerun

You can then view your application by opening [http://localhost:3000](http://localhost:3000) with your browser.


## Subscription Model

Arcan operates on a freemium/subscription model. While the open-source code can be deployed in your own environment free of charge, we offer several subscription tiers for access to premium features such as enhanced support, more extensive pipeline manifests, and additional tools. Visit our [Pricing Page](https://arcanapp.io/pricing) for more details.

## Live Demo & Deployment

Check out our live demo at [arcanapp.io](https://arcanapp.io/).

To deploy Arcan on your own, you can clone & deploy it with one click:


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBroomva%2Farcan%2Ftree%2Fmain)

## Learn More

To learn more about the technologies we use, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)

## Attribution

Arcan builds upon the hard work of others. Here are the original repositories we leveraged:

- [NextJS FastAPI Template](https://github.com/digitros/nextjs-fastapi)
- [InStock App](https://github.com/dha-stix/instock-app)
