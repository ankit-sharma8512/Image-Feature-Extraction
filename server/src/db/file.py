from src.config.db import mongo
from bson.objectid import ObjectId


def get_all_files(email):
    try:
        files = mongo.db.files.find({"email": email})
        return list(files)
    except:
        return None


def get_one_file(email, filename):
    try:
        file = mongo.db.files.find_one({"filename": filename, "email": email})
        if not file:
            return False
        return True
    except:
        return None


def save_file(file):
    try:
        saved_file = mongo.db.files.insert_one(file)
        return saved_file.inserted_id
    except:
        return False


def delete_file(file_id):
    try:
        mongo.db.files.delete_one({"_id": ObjectId(file_id)})
        return True
    except:
        return False


def get_file_data(file):
    pass
