import subprocess
import sys
from Database.wikiEngrenages import wikiGetEngrenages
from Database.getEngrenage import getEngrenage
import Database.createDatabase as createDatabase
from Database.getEngrenages import getEngrenages
from Database.createEngrenage import createEngrenageSQL
from Database.updateEngrenage import getForUpdateEngrenageSQL
from Database.updateEngrenage import updateEngrenageSQL
from Database.connexionUser import connexionUserBDD

from os.path import exists


def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])


# subprocess.Popen('echo "Geeks 4 Geeks"', shell=True)

pips_install = ['numpy', 'pandas', 'requests', 'beautifulsoup4', "Flask ", "flask-restful", "flask-cors", "requests"]

# for pip in pips_install:
#     try:
#         install(pip)
#     except:
#         print(f"impossible d'installer {pip}")

from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS

if exists("dataEngrenage.db") == False:
    createDatabase.main()

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
api = Api(app)


class wikiEngrenages(Resource):
    def get(self):
        return wikiGetEngrenages()
api.add_resource(wikiEngrenages, '/api/wikiEngrenages')

class Engrenages(Resource):
    def get(self):
        return getEngrenages()
api.add_resource(Engrenages, '/api/getEngrenages')

class Engrenage(Resource):
    def get(self, engrenageid):
        return getEngrenage(engrenageid)
api.add_resource(Engrenage, '/api/getEngrenages/<engrenageid>')


class createEngrenage(Resource):
    def post(self):
        res = request.get_json()
        nomEngrenage = res.get("nomEngrenage")
        avantage = res.get("avantage")
        inconvenient = res.get("inconvenient")
        image = res.get("image")
        Date = res.get("Date")
        userName = res.get("userName")
        createEngrenageSQL(nomEngrenage, avantage, inconvenient, image, Date, userName)
api.add_resource(createEngrenage, '/api/createEngrenage', methods=["POST"])


class updateEngrenage(Resource):
    def get(self, engrenageid):
        return getForUpdateEngrenageSQL(engrenageid)
    def post(self):
        res = request.get_json()
        nomEngrenage = res.get("nomEngrenage")
        idEngrenage = res.get("id")
        avantage = res.get("avantage")
        inconvenient = res.get("inconvenient")
        image = res.get("image")
        Date = res.get("Date")
        userName = res.get("userName")
        updateEngrenageSQL(idEngrenage, nomEngrenage, avantage, inconvenient, image, Date, userName)
api.add_resource(updateEngrenage, '/api/updateEngrenages/<engrenageid>')


class connexionUser(Resource):
    def post(self):
        res = request.get_json()
        nom = res.get("nom")
        password = res.get("password")
        return connexionUserBDD(nom, password)
api.add_resource(connexionUser, '/api/connectUser', methods=["POST"])

if __name__ == '__main__':
    app.run(debug=True)
