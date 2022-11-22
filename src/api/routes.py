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

# tickets
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

