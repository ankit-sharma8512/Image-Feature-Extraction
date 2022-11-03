import json
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from src.models.User import validateUser, validate_login
from src.db.user import register_user, login_user
from src.constants.error_message import error_message

auth = Blueprint("auth", __name__, url_prefix="/api/v1/auth")


@auth.post("/register")
def registerUser():
    try:
        user = request.get_json()
        if not validateUser(user):
            return error_message("Please Enter Valid User Data"), 400
        new_user = register_user(user)
        if (new_user == 409):
            return error_message("Username already exists"), 409

        access = create_access_token(identity=new_user['email'])
        new_user['access_token'] = access
        return jsonify(new_user), 201
    except Exception as e:
        print(str(e))
        return error_message("Internal Server Error"), 500


@auth.post("/login")
def loginUser():
    try:
        user = request.get_json()
        if not validate_login(user):
            return error_message("Please Enter Valid User Data"), 400
        is_valid = login_user(user)
        if not is_valid:
            return error_message("Invalid Username or Password"), 402

        access = create_access_token(identity=user['email'])
        logged_user = {
            "name": is_valid["name"], "email": user["email"], "access-token": access}
        return jsonify(logged_user), 200
    except Exception as e:
        print(str(e))
        return error_message("Internal Server Error"), 500
