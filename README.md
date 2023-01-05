# musee_virtuel_engrenage

pour lancer un projet Angular dabbord telecharger node.js ici : https://nodejs.org/en/download/

depuis votre IDE faire ouvrir un dossier/projet et a partir du terminal de l'IDE

installer angular avec : "npm install -g @angular/cli"

et faire un : "npm install" pour installer toute les modules

pour finir lancer la commande: "ng serve"

demarrer en premier le serveur dans python-bdd-musee-engrenage/main.py

et ensuite demarrer le front avec angular dans musee_virtuel_engrenage/angular-musee-engrenage et lancer avec le terminal 'ng serve'

Tout les pip install se feront automatiquement en decommentant la boucle for pip in pips_install:  presente dans python-bdd-musee-engrenage/main.py ligne 23 a 27
Sinon installer manuellement avec pip install et les noms present dans la variable pips_install


pips_install = ['numpy', 'pandas', 'requests', 'beautifulsoup4', "Flask ", "flask-restful", "flask-cors", "requests"]

