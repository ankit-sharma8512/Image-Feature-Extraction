from src.models.User import User
from src.config.db import mongo
import hashlib


def register_user(user):
    try:
        user['password'] = hashlib.sha256(
            user['password'].encode('utf-8')).hexdigest()
        new_user = User(user).__dict__
        check = mongo.db.users.find_one({'email': user['email']})
        if check:
            return 409

        mongo.db.users.insert_one(new_user)
        del new_user['_id'], new_user['password']
        return new_user
    except Exception as e:
        print("Register Error: "+str(e))
        raise Exception("Failed to Register User")


def login_user(user):
    try:
        user['password'] = hashlib.sha256(
            user['password'].encode('utf-8')).hexdigest()
        check = mongo.db.users.find_one({'email': user['email']})
        if not check:
            return False

        if check["password"] != user["password"]:
            return False
        return True
    except Exception as e:
        print("Register Error: "+str(e))
        raise Exception("Failed to Register User")
