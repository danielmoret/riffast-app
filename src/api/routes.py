"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from sqlalchemy import or_
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Ticket, Talonario, User_ticket
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


#Create flask app
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
    
    user_ticket = User_ticket.query.filter(or_(User_ticket.phone == phone,  User_ticket.email ==email) ).first()
    if user_ticket is None:
            return jsonify({"msg": "El telefono o email no son correctos"}), 401
    
    access_token = create_access_token(identity=user_ticket.id)
    return jsonify({"access_token" : access_token, "user_ticket_id":user_ticket.id, "nombre":user_ticket.full_name, "user_email":user_ticket.phone}),200

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
    phone = request.json.get("phone", None)
    
    user = User.query.filter(or_(User.phone == phone,  User.email ==email), User.password == password ).first()
    if user is None : 
        return jsonify({"msg":"El usuario o la contraseña son incorrectos"}), 401
    
    access_token = create_access_token(identity=user.id)
    return jsonify({"access_token" : access_token, "user_id":user.id, "user_email":user.email}),200

@api.route("/user-talonario", methods=['GET','POST'])
def signup_talonario():

    if request.method == "GET" : 
        users = User.query.all()
        users_dictionaries = []

        for user in users : 
            users_dictionaries.append(user.serialize())
        
        return jsonify(users_dictionaries), 200
    
    new_user_data = request.json
    try : 
        if "full_name" not in new_user_data or new_user_data["full_name"] == "" :
            raise Exception("No existe nombre")
        if "email" not in new_user_data or new_user_data["email"] == "" :
            raise Exception("No existe correo electronico")
        if "phone" not in new_user_data or new_user_data["phone"] == "" :
            raise Exception("No existe número de teléfono")
        if "password" not in new_user_data or new_user_data["password"] == "" :
            raise Exception("No existe contraseña")

        new_user = User.create(**new_user_data)
        return jsonify(new_user.serialize()), 200
    
    except Exception as error:
        return jsonify(error.args[0]),error.args[1] if len(error.args) > 1 else 500
        
#Talonarios
@api.route('/talonario', methods=['POST', 'GET'])
@jwt_required()
def get_talonarios():

    user_id = get_jwt_identity()

    if request.method == "GET" :
        talonarios = Talonario.query.filter_by(user_id = user_id)
        talonarios_dictionaries = []

        for talonario in talonarios :
            talonarios_dictionaries.append(talonario.serialize())

        return jsonify(talonarios_dictionaries), 200
    
    new_talonario_data = request.json

    try: 
        new_talonario = Talonario.create(**new_talonario_data, user_id = user_id)
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
@jwt_required()
def get_tickets():

    user_ticket_id = get_jwt_identity()

    if request.method == "GET":
        tickets = Ticket.query.filter_by(user_ticket_id = user_ticket_id)
        tickets_dictionaries = []
        for ticket in tickets :
            tickets_dictionaries.append(ticket.serialize())
        
        return jsonify(tickets_dictionaries)
    
    new_ticket_data = request.json
    try:
        new_ticket = Ticket.create(**new_ticket_data, user_ticket_id = user_ticket_id)
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

@api.route('/tickets/<int:talonario_id>', methods=['GET'])
def get_tickets_talonario(talonario_id):


    tickets = Ticket.query.filter_by(talonario_id = talonario_id)
    try:
        ticket_dictio = []
        for ticket in tickets:
            ticket_dictio.append(ticket.serialize())

        return jsonify(ticket_dictio),200

    except Exception as error:
        return jsonify({'msg':'No hay tickets para ese talonario'})


@api.route('/info-ticket/<int:numero>/<int:talonario_id>', methods=['GET'])
def info_ticket(numero,talonario_id):

    ticket = Ticket.query.filter_by(numero = numero, talonario_id = talonario_id).first()

    user_ticket = User_ticket.query.filter_by(id = ticket.user_ticket_id)

    try:
        return jsonify(user_ticket[0].serialize())

    except Exception as error:
        return jsonify({'msg':'user_ticket no existe'}),400


# Eliminar de la BD el ticket cuando se hace click en eliminar (Vista /Buy seccion mis Tickets)
@api.route('/delete-ticket/<int:numero>/<int:talonario_id>', methods=['DELETE'])
def delete_ticket(numero, talonario_id):
    ticket = Ticket.query.filter_by(numero = numero, talonario_id = talonario_id).first()

    try:
        ticket_delete = Ticket.delete_ticket(ticket)
        return jsonify(ticket_delete),200

    except Exception as error:
        return jsonify({'msg': 'el ticket no se pudo eliminar'}),400


