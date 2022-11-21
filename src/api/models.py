from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     def __repr__(self):
#         return f'<User {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }

class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    numero = db.Column(db.Integer, nullable=False)
    talonario_id = db.Column(db.Integer, ForeignKey('talonario.id'))
    user_ticket_id = db.Column(db.Integer, ForeignKey('user_ticket.id'))

    def serialize(self):
        return{
            "id": self.id,
            "numero": self.numero
        }