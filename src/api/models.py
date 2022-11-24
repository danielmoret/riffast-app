from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    numero = db.Column(db.Integer, nullable=False)
    talonario_id = db.Column(db.Integer, ForeignKey('talonario.id'))
    user_ticket_id = db.Column(db.Integer, ForeignKey('user_ticket.id'))
    
    def serialize(self):
        return {
          "id": self.id,
           "numero": self.numero
        }
    

class User_talonario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(200), unique=False, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    
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
    precio = db.Column(db-Float(10), unique=False, nullable=False)
    imagen_premio = db.Column(db.String(200), unique=False, nullable=False)
    descripcion = db.Column(db.String(300), unique=False, nullable=False)
    fecha_sorteo = db.Column(db.dateTime, nullable=False)
    plataforma_sorteo = db.Column(db.String(100), unique=False, nullable=False)
    metodo_de_pago = db.Column(db.String(100), unique=False, nullable=False)
    user_talonario_id = db.Column(db.Integer, ForeignKey('user_talonario.id'))

    def __init__(self, **kwargs):
        self.nombre = kwargs['nombre']
        self.premio = kwargs['premio']
        self.precio = kwargs['precio']
        self.imagen_premio = kwargs['imagen_premio']
        self.descripcion = kwargs['descripcion']
        self.fecha_sorteo = kwargs['fecha_sorteo']
        self.plataforma_sorteo = kwargs['plataforma_sorteo']
        self.metodo_de_pago = kwargs['metodo_de_pago']
        user_talonario_id = kwargs['user_talonario_id']

    @classmethod
    def create(cls, **kwargs):
        new_talonario = cls(**kwargs)
        db.session.add(new_talonario)

        try:
            db.session.commit()
            return new_talonario
        except Exception as error:
            raise Exception(error.args[0], 400)

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
        
            # do not serialize the password, its a security breach
        }

class User_ticket(db.model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(100))

    def serialize(self):
        return{
            "id": self.id,
            "full_name": self.full_name,
            "phone": self.phone,
            "email": self.email

        }