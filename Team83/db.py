import psycopg2
import psycopg2.extras
from flask import g, current_app


def init_db():
    db = get_db()

    with db.cursor() as cursor:
        cursor.execute(open("schema.sql", "r").read())


def init_app(app):
    app.teardown_appcontext(close_db)


def get_db():
    if 'db' not in g:  # TODO: this should be from config settings not hardcoded here
        g.db = psycopg2.connect(current_app.config['DATABASE_URL'])

    return g.db


def get_named_tuple_cursor():
    return psycopg2.extras.NamedTupleCursor


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()
