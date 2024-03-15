import pandas as pd
from langchain.document_loaders import (DataFrameLoader,
                                        UnstructuredMarkdownLoader)
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS, Chroma

embeddings = OpenAIEmbeddings()


class VectorStoreHandler:
    def __init__(self, **kwargs):
        self.kwargs = kwargs

    def get_vectorstore(self):
        get_vectorstore_strategies = {
            "chroma": load_chroma_vectorstore,
            "faiss": load_faiss_vectorstore,
        }
        vectorstore_strategy = self.kwargs.get("vectorstore", "chroma")
        return get_vectorstore_strategies[vectorstore_strategy]()

    def set_vectorstore(self):
        set_vectorstore_strategies = {
            "chroma": pandas_df_vectorstore_loader,
            "faiss": faiss_metadata_index_loader,
        }
        vectorstore_strategy = self.kwargs.get("vectorstore", "chroma")
        return set_vectorstore_strategies[vectorstore_strategy]()


def load_chroma_vectorstore():
    return Chroma(
        persist_directory="indexes/croma_index", embedding_function=embeddings
    )


def load_faiss_vectorstore(index_key: str = "default"):
    return FAISS.load_local(f"indexes/faiss_index/{index_key}", embeddings)


def faiss_text_index_loader(text: str, index_key: str = "default"):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=20)
    texts = text_splitter.split_text(text)

    docsearch = FAISS.from_texts(
        texts,
        OpenAIEmbeddings(chunk_size=500),
        metadatas=[{"source": i} for i in range(len(texts))],
    )
    docsearch.save_local(f"indexes/faiss_index/{index_key}")
    return docsearch


def faiss_metadata_index_loader(
    metadata_path: str = "indexes/metadata/schema.md",
):
    loader = UnstructuredMarkdownLoader(metadata_path)
    data = loader.load()
    # df = pd.read_csv(data_path)
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=20)
    texts = text_splitter.split_documents(data)

    # df_loader = DataFrameLoader(df, page_content_column=page_content_column)
    # docs = df_loader.load()

    faiss_store = FAISS.from_documents(texts, embeddings)
    # docsearch.add_documents(docs)
    faiss_store.save_local("indexes/faiss_index")

    # with open("vectors.pkl", "wb") as f:
    #     pickle.dump(docsearch, f)


def pandas_df_vectorstore_loader(
    data_path: str = "indexes/samples/telemetry_sample_forecast.csv",
    page_content_column: str = "y",
):
    df = pd.read_csv(data_path)
    # jdf = df.to_dict(orient='split')
    loader = DataFrameLoader(df, page_content_column=page_content_column)
    docs = loader.load()

    # VectorStoreRetrieverMemory

    vectorstore_ts = Chroma.from_documents(
        docs, embeddings, persist_directory="croma_index"
    )
    # docs = pandas_df_vectorstore_loader(data_path=df_path,  page_content_column=data_columnn)
    vectorstore_ts.persist()

    return docs
