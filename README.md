# musee_virtuel_engrenage

pour lancer un projet Angular dabbord telecharger node.js ici : https://nodejs.org/en/download/

ensuite installer angular avec : npm install -g @angular/cli

demarrer en premier le serveur dans python-bdd-musee-engrenage/main.py

et ensuite demarrer le front avec angular dans musee_virtuel_engrenage/angular-musee-engrenage et lancer avec le terminal 'ng serve'

TTout les pip install se feront automatiquement en decommentant la boucle for pip in pips_install: 
Sinon installer manuellement avec pip install et les noms present dans la variable pips_install
def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])


pips_install = ['numpy', 'pandas', 'requests', 'beautifulsoup4', "Flask ", "flask-restful", "flask-cors", "requests"]

# for pip in pips_install:
#     try:
#         install(pip)
#     except:
#         print(f"impossible d'installer {pip}")
