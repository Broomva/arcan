from functools import wraps

from fastapi import HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

security = HTTPBearer()


def requires_auth(func):
    @wraps(func)
    def wrapper(*args, token: HTTPAuthorizationCredentials = security, **kwargs):
        import os

        if token.credentials != os.environ["AUTH_TOKEN"]:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect bearer token",
                headers={"WWW-Authenticate": "Bearer"},
            )

        return func(*args, **kwargs)

    return wrapper


from functools import wraps

from fastapi import Request


def log_endpoint(func):
    @wraps(func)
    def wrapper(request: Request, *args, **kwargs):
        client_host = request.client.host
        client_user_agent = request.headers.get("user-agent")
        print(
            f"Endpoint hit with query: {kwargs['query']}, context_url: {kwargs['context_url']}, client_host: {client_host}, client_user_agent: {client_user_agent}"
        )
        return func(request, *args, **kwargs)

    return wrapper
