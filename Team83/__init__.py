from flask import Flask
from Team83.config import Config
from flask_mysqldb import MySQL
def create_app(config_class=Config):
    # create and configure the app
    app = Flask(__name__)
    app.config.from_object(config_class)
    with app.app_context():
        # register view blueprints
        from Team83.views.index import indexbp
        from Team83.views.error import errorbp
        app.register_blueprint(indexbp, url_prefix='/')
        app.register_blueprint(errorbp, url_prefix='/error')
        # set up error pages
        return app
    
