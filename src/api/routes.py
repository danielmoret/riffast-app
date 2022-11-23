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
        
#Talonarios
@api.route('/talonario', methods=['POST', 'GET'])
def get_talonarios():

    if request.method == "GET" :
        talonarios = Talonario.query.all()
        talonarios_dictionaries = []

        for talonario in talonarios :
            talonarios_disctionaries.append(talonario.serialize())

        return jsonify(talonarios_disctionaries), 200
    
    new_talonario_data = request.json

    try: 
        new_talonario = Talonario.create(**new_talonario_data)
        return jsonify(new_talonario.serialize()), 201
    except Exception as error:
        return jsonify(error.args[0]),error.args[1] if len(error.args) > 1 else 500

#Talonario especifico
@api.route('/talonario/<int:talonario_id>', methods=['GET'])
def get_talonario(talonario_id):

        talonario = Talonario.query.filter_by(id = talonario_id)
        try:
            return jsonify(talonario[0].serialize())
        except Exception as error:
            return jsonify({"msg": "El talonario no existe"})

#tickets
@api.route('/ticket', methods=['POST', 'GET'])
def get_tickets():
    if request.method == "GET":
        tickets = Ticket.query.all()
        tickets_dictionaries = []
        for ticket in tickets :
            tickets_dictionaries.append(ticket.serialize())
        
        return jsonify(tickets_dictionaries)
    
    new_ticket_data = request.json
    try:
        new_ticket = Ticket.create(**new_ticket_data)
        return jsonify(new_ticket.serialize()), 201
    
    except Exception as error:
        return jsonify(error.args[0]),error.args[1] if len(error.args) > 1 else 500



@api.route('/ticket/<int:ticket_id>', methods=['GET'])
def get_ticket(ticket_id):
    ticket = Ticket.query.filter_by(id = ticket_id)
    try:
        return jsonify(ticket[0].serialize())

    except Exception as error:
        return jsonify({'msg':'ticket no existe'})



