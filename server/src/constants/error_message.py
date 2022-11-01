from flask import jsonify


def error_message(msg):
    return jsonify({"msg": str(msg)})
