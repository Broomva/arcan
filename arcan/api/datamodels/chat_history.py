import datetime

from sqlalchemy import Column, DateTime, String, Text

from arcan.api.datamodels import Base, engine

Base.metadata.create_all(engine)

class ChatsHistory(Base):
    """
    Represents the chat history for a sender.

    Attributes:
        sender (str): The sender of the chat.
        history (str): The chat history.
        updated_at (datetime): The timestamp of when the chat history was last updated.
    """

    __tablename__ = "chats_history"
    sender = Column(String, primary_key=True, index=True)
    history = Column(Text)
    updated_at = Column(DateTime, default=datetime.utcnow)