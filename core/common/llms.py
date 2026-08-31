import os

from langchain.chat_models import init_chat_model
from langchain_openai import OpenAIEmbeddings


class LLMS:
    """模型类"""

    @staticmethod
    def bailian_client(temperature: int = 0.7):
        return init_chat_model(
            model=os.environ.get("BAILIAN_MODEL"),
            openai_api_key=os.environ.get("BAILIAN_API_KEY"),
            openai_api_base=os.environ.get("BAILIAN_BASE_URL"),
            model_provider="openai",
            temperature=temperature,
        )

    @staticmethod
    def ollama_client(temperature: int = 0.7):
        return init_chat_model(
            model=os.environ.get("LOCAL_MODEL"),
            openai_api_key=os.environ.get("LOCAL_API_KEY"),
            openai_api_base=os.environ.get("LOCAL_BASE_URL"),
            model_provider="openai",
            temperature=temperature,
        )

    @staticmethod
    def deepseek_client(temperature: int = 0.7):
        return init_chat_model(
            model=os.environ.get("DEEPSEEK_MODEL"),
            api_key=os.environ.get("DEEPSEEK_API_KEY"),
            openai_api_base=os.environ.get("DEEPSEEK_BASE_URL"),
            model_provider="openai",
            temperature=temperature,
        )

    @staticmethod
    def embedding():
        return OpenAIEmbeddings(
            model=os.environ.get("EMBEDDING_MODEL"),
            openai_api_key=os.environ.get("EMBEDDING_API_KEY"),
            openai_api_base=os.environ.get("EMBEDDING_BASE_URL"),
            check_embedding_ctx_length=False,
        )
