from langchain_chroma import Chroma

from core.common.llms import LLMS


class Db:
    """模型类"""

    @staticmethod
    def chroma(name: str = "chroma", persist_directory: str = "./chroma_db", metadata: str = "l2"):
        return Chroma(
            collection_name=name,
            embedding_function=LLMS.embedding(),
            persist_directory=persist_directory,
            collection_metadata={"hnsw:space": metadata},
        )
