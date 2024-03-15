# %%
import json
import os
import time

import html2text
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

brwoserless_api_key = os.getenv("BROWSERLESS_API_KEY")


def scrape_website(url: str):
    # scrape website, and also will summarize the content based on objective if the content is too large
    # objective is the original objective & task that user give to the agent, url is the url of the website to be scraped

    print("Scraping website...")
    # Define the headers for the request
    headers = {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
    }

    # Define the data to be sent in the request
    data = {"url": url}

    # Convert Python object to JSON string
    data_json = json.dumps(data)

    # Send the POST request
    response = requests.post(
        f"https://chrome.browserless.io/content?token={brwoserless_api_key}",
        headers=headers,
        data=data_json,
        timeout=60,
    )

    # Check the response status code
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        text = soup.get_text()
        if len(text) < 100:
            raise Exception("Content too short")
        return text
    else:
        raise Exception(f"HTTP request failed with status code {response.status_code}")


def scrape_website_selenium(url):
    try:
        # Configure Selenium with a headless browser
        options = Options()
        options.headless = True
        driver = webdriver.Chrome(options=options)

        # Access the webpage
        driver.get(url)

        # Wait for JavaScript to render. Adjust time as needed.
        time.sleep(5)  # Time in seconds

        # Extract the page source
        page_source = driver.page_source

        # Close the browser
        driver.quit()

        # Convert HTML to Markdown
        converter = html2text.HTML2Text()
        markdown = converter.handle(page_source)
        if len(markdown) < 100:
            raise Exception("Content too short")

        return markdown
    except Exception as e:
        print(f"Error scraping website: {e}")
        raise e


import os
import re
from pathlib import Path

import httpx
from bs4 import BeautifulSoup


def scrape_url(url) -> str:
    # fetch article; simulate desktop browser
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"
    }
    response = httpx.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "lxml")

    for tag in soup.find_all():
        if tag.string:
            stripped_string = tag.string.strip()
            tag.string.replace_with(stripped_string)

    text = soup.get_text()
    clean_text = text.replace("\n\n", "\n")

    return clean_text.replace("\t", "")


def url_text_scrapper(url: str):
    domain_regex = r"(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\.]+)"

    match = re.search(domain_regex, url)

    if match:
        domain = match.group(1)
        clean_domain = re.sub(r"[^a-zA-Z0-9]+", "", domain)

    # Support caching speech text on disk.
    file_path = Path(f"scrappings/{clean_domain}.txt")
    print(file_path)

    if file_path.exists():
        scrapped_text = file_path.read_text()
    else:
        print("Scrapping from url")
        scrapped_text = scrape_url(url)
        os.makedirs(file_path.parent, exist_ok=True)
        file_path.write_text(scrapped_text)

    return scrapped_text, clean_domain
