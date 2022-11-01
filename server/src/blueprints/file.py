from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.constants.error_message import error_message
from src.db.file import get_all_files

file = Blueprint("file", __name__, url_prefix="/api/v1/file")


@file.get("/get")
@jwt_required()
def get_files():
    try:
        current_user = get_jwt_identity()
        all_files = get_all_files(current_user)
        if all_files is None:
            return error_message("No Files Found"), 404
        return jsonify(all_files), 200
    except Exception as e:
        print(str(e))
        return jsonify({"msg": "Internal Server Error"}), 500
