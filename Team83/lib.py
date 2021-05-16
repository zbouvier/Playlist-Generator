from flask import session
from secrets import token_urlsafe


def generate_shareurl():
    return session["username"] + token_urlsafe(8)
