from src.config.db import mongo


def get_all_files(email):
    try:
        files = mongo.db.files.find({"email": email})
        return list(files)
    except:
        return None


def get_file_data(file):
    pass
