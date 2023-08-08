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
