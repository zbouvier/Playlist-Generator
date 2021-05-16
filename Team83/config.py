from os import environ

class Config:
    """Set Flask configuration vars from .env file."""

    # General
    FLASK_DEBUG = environ["FLASK_DEBUG"]
    SECRET_KEY = environ.get('SECRET_KEY')

    # Database
    SQLALCHEMY_DATABASE_URI = environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    