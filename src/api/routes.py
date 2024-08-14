"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/users', methods=['GET'])
def getUsers():
    users = User.query.all()
    users = list(map(lambda item: item.serialize(), users))
    return jsonify({'users': users})

@api.route('/users', methods=['POST'])
def createUser():
    data = request.json
    user = User()
    try:
        user.email = data.get('email')
        user.password = data.get('password')
        db.session.add(user)
        db.session.commit()
        return jsonify({"message":"user creado"})
    except Exception as e:
        print(e.args)
        return jsonify({'message': 'Error'}),409
