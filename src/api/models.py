from flask_sqlalchemy import SQLAlchemy
import re

db = SQLAlchemy()


class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    numero = db.Column(db.Integer, nullable=False)
    talonario_id = db.Column(db.Integer, db.ForeignKey('talonario.id'))
    user_ticket_id = db.Column(db.Integer, db.ForeignKey('user_ticket.id'))
    
    def serialize(self):
        return {
        "id": self.id,
        "numero": self.numero,
        "talonario_id" : self.talonario_id,
        "user_ticket_id" : self.user_ticket_id
        }
    

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(200), unique=False, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __init__(self, **kwargs):
        self.full_name = kwargs['full_name']
        self.phone = kwargs['phone']
        self.email = kwargs['email']
        self.password = kwargs['password']

    @classmethod
    def create(cls, **kwargs):
        new_user = cls(**kwargs)
        db.session.add(new_user) 

        try:
            db.session.commit() 
            return new_user
        except Exception as error:
            raise Exception(error.args[0],400)
    
    def serialize(self):
        return {
        "id": self.id,
        "full_name": self.full_name,
        "phone": self.phone,
        "email": self.email,
        }
    
class Talonario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200), unique=False, nullable=False)
    premio = db.Column(db.String(200), unique=False, nullable=False)
    precio = db.Column(db.Float(10), unique=False, nullable=False)
    imagen_premio = db.Column(db.String(200), unique=False, nullable=False)
    descripcion = db.Column(db.String(300), unique=False, nullable=False)
    fecha_sorteo = db.Column(db.Date, nullable=False)
    plataforma_sorteo = db.Column(db.String(100), unique=False, nullable=False)
    metodo_de_pago = db.Column(db.String(100), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "premio": self.premio,
            "precio": self.precio,
            "imagen_premio": self.imagen_premio,
            "descripcion": self.descripcion,
            "fecha_sorteo": self.fecha_sorteo,
            "plataforma_sorteo": self.plataforma_sorteo,
            "metodo_de_pago": self.metodo_de_pago,
            "user_id" : self.user_id
        
            # do not serialize the password, its a security breach
        }

class User_ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True)

    def __init__(self, **kwargs):
        self.full_name = kwargs['full_name']
        self.phone = kwargs['phone']
        self.email = kwargs['email']

    @classmethod
    def create(cls, **kwargs):
        new_user = cls(**kwargs)
        db.session.add(new_user) # INSERT INTO

        try:
            db.session.commit() # Se ejecuta el INSERT INTO
            return new_user
        except Exception as error:
            raise Exception(error.args[0],400)

    def serialize(self):
        return{
            "id": self.id,
            "full_name": self.full_name,
            "phone": self.phone,
            "email": self.email

        }
    