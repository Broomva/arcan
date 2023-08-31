import os
from typing import Callable, Dict, Union

# from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.chat_models import ChatOpenAI
from pydantic import BaseModel


class LLM(BaseModel):
    """This is a stub for the LLM model."""

    provider: str = "ChatOpenAI"
    llm: Union[ChatOpenAI, str, int, float] = None

    def __init__(self, **data):
        super().__init__(**data)
        self.llm = LLMFactory.create_llm(self.provider, **data)


class LLMFactory:
    provider_map: Dict[str, Callable[..., Union[ChatOpenAI, str, int, float]]] = {
        "ChatOpenAI": lambda **kwargs: ChatOpenAI(
            temperature=kwargs.get("temperature", 0),
            model_name=kwargs.get("model", "gpt-3.5-turbo"),
            openai_api_key=kwargs.get(
                "openai_api_key", os.environ.get("OPENAI_API_KEY")
            ),
            # streaming=kwargs.get("streaming", True),
            # callbacks=[StreamingStdOutCallbackHandler()]
        ),
    }

    @staticmethod
    def create_llm(provider: str, **kwargs):
        if provider not in LLMFactory.provider_map:
            raise NotImplementedError(f"LLM provider {provider} not implemented.")
        provider_func = LLMFactory.provider_map[provider]
        return provider_func(**kwargs)
