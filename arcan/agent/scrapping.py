import re
from pathlib import Path
import os

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
