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

#Talonarioss
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
    