from dotenv import load_dotenv
from fastapi import Depends, FastAPI, Form, Request
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from arcan.ai.agents import ArcanSession
from arcan.api.datamodels import get_db

# from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

# from arcan.api.session.auth import requires_auth

# auth_scheme = HTTPBearer()

load_dotenv()

app = FastAPI()

@app.get("/")
def default():
    return {"message": "Check out the API documentation at http://arcanai.tech/api/docs"}


@app.get("/api/check")
async def index():
    return {"message": "Arcan is Running!"}


# @requires_auth
@app.get("/api/chat")
async def chat(user_id: str, query: str, db: Session = Depends(get_db)):
    arcan_session = ArcanSession(db)
    print(f"Sending the LangChain response to user: {user_id}")
    agent = arcan_session.get_or_create_agent(user_id)
    # Get the generated text from the LangChain agent
    langchain_response = agent.get_response(user_content=query)
    # Store the conversation in the database
    try:
        arcan_session.store_message(
            user_id=user_id, body=query, response=langchain_response
        )
        arcan_session.store_chat_history(
            user_id=user_id, agent_history=agent.chat_history
        )
    except SQLAlchemyError as e:
        db.rollback()
        print(f"Error storing conversation in database: {e}")
    return {"response": langchain_response}
