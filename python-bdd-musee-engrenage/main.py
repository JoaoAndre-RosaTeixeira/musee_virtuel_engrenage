import subprocess
import sys
from Database.wikiEngrenages import wikiGetEngrenages
from Database.getEngrenage import getEngrenage
import Database.createDatabase as createDatabase
from Database.getEngrenages import getEngrenages
from os.path import exists


def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])


# subprocess.Popen('echo "Geeks 4 Geeks"', shell=True)

pips_install = ['numpy', 'panda', 'requests', 'beautifulsoup4', "Flask ", "flask-restful", "flask-cors"]

# for pip in pips_install:
#     try:
#         install(pip)
#     except:
#         print(f"impossible d'installer {pip}")

from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

print(exists("dataEngrenage.db"))
if exists("dataEngrenage.db") == False:
    createDatabase.main()
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
        print(engrenageid)
        return getEngrenage(engrenageid)
api.add_resource(Engrenage, '/api/getEngrenages/<engrenageid>')
if __name__ == '__main__':
    app.run(debug=True)
