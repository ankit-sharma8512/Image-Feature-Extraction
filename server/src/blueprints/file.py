import random
import json
import string
import os
import math
import pandas as pd
from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.constants.error_message import error_message
from src.db.file import get_all_files, save_file, delete_file, get_one_file
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = {'csv'}
FILENAME_SIZE = 25
ROWS_PER_PAGE = 100


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


file = Blueprint("file", __name__, url_prefix="/api/v1/file")


@file.get("/get")
@jwt_required()
def get_files():
    try:
        current_user = get_jwt_identity()
        all_files = get_all_files(current_user)
        for a in all_files:
            del a['_id']
        if all_files is None:
            return error_message("No Files Found"), 404
        return jsonify(all_files), 200
    except Exception as e:
        print(str(e))
        return error_message("Internal Server Error"), 500


@file.post('/upload')
@jwt_required()
def upload_file():
    file_saved = None
    try:
        current_user = get_jwt_identity()
        if 'file' not in request.files:
            return error_message("File not found"), 404
        filename = str(''.join(random.choices(
            string.ascii_uppercase + string.digits, k=FILENAME_SIZE)))
        file_data = {"filename": filename+'.csv', "email": current_user}
        file_saved = save_file(file_data)
        if not file_saved:
            return error_message("File save unsucessful"), 503

        file = request.files['file']
        if file and allowed_file(file.filename):
            file.save(os.path.join(
                current_app.config['UPLOAD_FOLDER'], secure_filename(filename+'.csv')))
            return jsonify({"message": "File uploaded successfully"}), 201
        else:
            return jsonify({"message": "File Format not supported"}), 400

    except Exception as e:
        print(str(e))
        if file_saved:
            delete_file(file_saved)
        return error_message("Internal Server Error"), 500


@file.get('/get/<filename>')
@jwt_required()
def get_file_data(filename):
    try:
        current_user = get_jwt_identity()
        if not get_one_file(current_user, filename):
            return error_message("No Files Found"), 404

        file_path = os.path.join(
            current_app.config['UPLOAD_FOLDER'], secure_filename(filename))
        if not os.path.exists(file_path):
            raise Exception("Invalid File Path")

        params = request.args
        page = params.get("page", default=1, type=int)
        df = pd.read_csv(file_path)
        total_rows = len(df.index)
        total_pages = math.ceil(len(df.index)/ROWS_PER_PAGE)
        if page > total_pages:
            return error_message("Page Error"), 400
        begin = min(total_rows-1, (page-1)*ROWS_PER_PAGE)
        end = min(total_rows, page*ROWS_PER_PAGE)
        results = df.iloc[begin:end]

        return jsonify({"totalPages": total_pages,
                        "totalResults": total_rows,
                        "currentPage": page,
                        "currentResults": len(results.index),
                        "results": json.loads(results.to_json(orient='records'))}), 200
    except Exception as e:
        print(str(e))
        return error_message("Internal Server Error"), 500
