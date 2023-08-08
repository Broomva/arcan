from arcan.agent.vectorstores import faiss_text_index_loader, load_faiss_vectorstore
from arcan.agent.scrapping import url_text_scrapper

def url_text_scrapping_chain(query: str, url: str) -> tuple[str, list[str]]:
    global docsearch, job_domain, chain
    print(docsearch, job_domain)
    text, current_domain = url_text_scrapper(url)
    if not docsearch and current_domain != job_domain:
        try:
            print("Loading index")
            job_domain = current_domain
            docsearch = load_faiss_vectorstore(index_key = current_domain)
        except Exception as e:
            print(f'Error loading index: {e}, creating new index')
            docsearch = faiss_text_index_loader(text = text, index_key = current_domain)
    print('Running chain')
    return chain.run(query, docsearch)