"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

        #Abraham 

@api.route("/login-talonario", methods=['POST'])
def login_talonario():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User_talonario.query.filter_by(email=email, password=password).first()
    if user is None : 
        return jsonify({"msg":"El usuario o la contraseña son incorrectos"}), 401
    return jsonify({"msg":"Si funciona!!!"}), 200

@api.route("/user-talonario", methods=['GET','POST'])
def signup_talonario():

    if request.method == "GET" : 
        users = User_talonario.query.all()
        users_dictionaries = []

        for user in users : 
            users_dictionaries.append(user.serialize())
        
        return jsonify(users_dictionaries), 200
    
    new_user_data = request.json
    try : 
        if "full_name" not in new_user_data or new_user_data["name"] == "" :
            raise Exception("No existe nombre")
        if "email" not in new_user_data or new_user_data["email"] == "" :
            raise Exception("No existe correo electronico")
        if "phone" not in new_user_data or new_user_data["phone"] == "" :
            raise Exception("No existe número de teléfono")
        if "password" not in new_user_data or new_user_data["password"] == "" :
            raise Exception("No existe contraseña")

        new_user = User_talonario.create(**new_user_data)
        return jsonify(new_user.serialize()), 200
    
    except Exception as error:
        return jsonify(error.args[0]),error.args[1] if len(error.args) > 1 else 500