from flask import Flask
from flask_jwt_extended import JWTManager
import os
import datetime
from src.config.db import mongo
from src.blueprints.auth import auth
from src.blueprints.file import file


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    #app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
    mongo.init_app(app, uri=os.environ.get("MONGO_URI"))
    if test_config is None:
        app.config.from_mapping(
            SECRET_KEY=os.environ.get("SECRET_KEY"),
            JWT_SECRET_KEY=os.environ.get("JWT_SECRET_KEY"),
            JWT_ACCESS_TOKEN_EXPIRES=datetime.timedelta(days=1),
            UPLOAD_FOLDER=os.environ.get("UPLOAD_FOLDER")
        )
    else:
        app.config.from_mapping(test_config)

    JWTManager(app)
    app.register_blueprint(auth)
    app.register_blueprint(file)

    return app
