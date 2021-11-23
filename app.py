from math import sqrt

from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='front-end/build', static_url_path='')


def calcHipotenusa(b, c):
    res = int(sqrt((b ** 2) + (c ** 2)))
    return str(res)


def calcCateto(a, x):
    res = int(sqrt((a ** 2) - (x ** 2)))
    return str(res)


@app.route('/get', methods=['GET'])
@cross_origin()
def get():
    # Cálcuo da hipotenusa
    if not request.args.get('a'):
        b = int(request.args.get('b'))
        c = int(request.args.get('c'))
        return calcHipotenusa(b, c)
    # Cálculo do cateto oposto
    elif not request.args.get('b'):
        a = int(request.args.get('a'))
        c = int(request.args.get('c'))
        return calcCateto(a, c)
    # Cálculo do cateto adjacente
    elif not request.args.get('c'):
        a = int(request.args.get('a'))
        b = int(request.args.get('b'))
        return calcCateto(a, b)


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


# @TODO Handle text output on front end
# def checkFormula(a, b, c):
#     if a ** 2 == (b ** 2) + (c ** 2):
#         return {"Text": 'É um triângulo pitagórico'}
#     else:
#         return {"Text": 'Não é um triângulo pitagórico'}
# else:
#     a = int(request.args.get('a'))
#     b = int(request.args.get('b'))
#     c = int(request.args.get('c'))
#     return checkFormula(a, b, c)


if __name__ == '__main__':
    app.run()
