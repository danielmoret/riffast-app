"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Ticket, User_talonario, Talonario, User_ticket
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#Daniel
#Login user_ticket
@api.route("/login-ticket", methods=["POST"])
def login_ticket():
    email = request.json.get("email", None)
    phone = request.json.get("phone", None)
    
    user_phone = User_ticket.query.filter_by( phone = phone).first()
    if user_phone is None:
        user_email = User_ticket.query.filter_by( phone = phone).first()
        if user_email is None:
            return jsonify({"msg": "El telefono o email no son correctos"}), 401
    
    return jsonify({"msg": "Login ticket satisfactorio"}), 401

#Signup user_ticket
@api.route('/user-ticket', methods=['GET','POST'])
def get_users():
    if request.method == 'GET':
        users = User_ticket.query.all()
        users_dictionaries = []

        for user in users:
            users_dictionaries.append(user.serialize())

        return jsonify(users_dictionaries), 200
    
    new_user_data = request.json
    try:
        if "full_name" not in new_user_data or new_user_data["full_name"] == "": 
            raise Exception("No ingresaste el nombre completo",400)
        if "phone" not in new_user_data or new_user_data["phone"] == "": 
            raise Exception("No ingresaste el phone",400)
        new_user = User_ticket.create(**new_user_data)
        return jsonify(new_user.serialize()),200
    except Exception as error:
        return jsonify(error.args[0]),error.args[1] if len(error.args) > 1 else 500
    
  

