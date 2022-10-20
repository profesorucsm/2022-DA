#### APLICACIÓN BASICA
# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def inicio():
#     return "<h1>PAGINA INICIAL</h1>"

# @app.route("/productos")
# def productos():
#     return "<h1>Estos son los PRODUCTOS</h1>"

# @app.route("/clientes")
# def clientes():
#     return "<h1>Estos son los CLIENTES</h1>"



#### CREACION DE CLASES Y COLECCIONES
# from flask import Flask,render_template,request,redirect,url_for
# from producto import Producto

# app = Flask(__name__)

# lst_prod = [
#     Producto('c001','cuaderno',30),
#     Producto('c002', 'lapiz', 40),
#     Producto('c003','libro',50)
# ]

# @app.route('/')
# def inicio():
#     return render_template('productos.html', productos=lst_prod)



#### APLICACION DE PORTAFOLIO
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def inicio():   
    destrezas = [
        {'curso':'PHP',
        'imagen':'img/php.png',
        'nivel':'avanzado'
        },
        {'curso':'Java',
        'imagen':'img/java.png',
        'nivel':'intermedio'
        },
        {'curso':'C#',
        'imagen':'img/csharp.png',
        'nivel':'basico'
        }
    ]
    return render_template("index.html", destrezas=destrezas)
