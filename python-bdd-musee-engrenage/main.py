import subprocess
import sys
import http.server

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# subprocess.Popen('echo "Geeks 4 Geeks"', shell=True)

pips_install = ['numpy', 'panda']

for pip in pips_install:
    try:
        install(pip)
    except:
        print(f"impossible d'installer {pip}")

PORT = 8888
server_address = ("", PORT)

server = http.server.HTTPServer
handler = http.server.CGIHTTPRequestHandler
handler.cgi_directories = ["/Database/"]
print("Serveur actif sur le port :", PORT)

httpd = server(server_address, handler)
httpd.serve_forever()