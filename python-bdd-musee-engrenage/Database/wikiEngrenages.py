import requests as requests
from bs4 import BeautifulSoup

# https://fr.wiktionary.org/wiki/engrenage
# #mw-content-text > div.mw-parser-output > ol
def wikiGetEngrenages():
# def wikiGetEngrenages(url, path):
    try:
        r = requests.get("https://fr.wiktionary.org/wiki/engrenage").content
        soup = BeautifulSoup(r, features="html.parser")
        cont = soup.select_one("#mw-content-text > div.mw-parser-output > ol").text

        print(cont)
        return cont


    except:
        txt = '''(Mécanique) Disposition de plusieurs roues qui s’engrènent les unes dans les autres.
        Deux grands défauts qu'on doit éviter dans un engrenage, c'est qu'il soit trop fort ou trop faible. Dans le premier cas, les dents de la roue sont sujettes à quoter, c'est-à-dire, que les deux pointes de deux dents voisines vont toucher les deux faces opposées des deux ailes du pignon ; de sorte que ni la roue, ni le pignon ne peuvent se mouvoir. — (Denis Diderot & Jean Le Rond d’Alembert, Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers, 1782, p.457)
        Le mouvement de rotation imprimé par le vent à l'arbre est transmis aux meules par l’intermédiaire d’engrenages, qui sont ordinairement en bois. — (Edmond Nivoit, Notions élémentaires sur l’industrie dans le département des Ardennes, E. Jolly, Charleville, 1869, page 116)
        La disposition à engrenages planétaires comporte un pignon central monté directement sur l'arbre du moteur, un équipage de satellites et une couronne fixe dans laquelle les satellites engrènent en tournant sur eux-mêmes. — (La Technique moderne, H. Dunod & E. Pinat, 1936, vol.28, page 481)
        (Sens figuré) Enchaînement de circonstances dont on ne peut se dégager.
        Et si vous lui disiez qu'une fois le doigt dans l'engrenage, la main, le bras y passent et que le corps tout entier est happé, broyé, croyez-vous qu'il vous rembarrerait ? — (Francis Carco, Messieurs les vrais de vrai,  Les Éditions de France, Paris, 1927)
        Pour la première fois, Mattia eut honte d'avoir vingt-deux ans et de ne pas être en possession du permis de conduire. C'était une des choses qu'il avait négligées, un pas évident dans la vie d'un garçon qu'il avait décidé de ne pas accomplir pour échapper le plus possible à l'engrenage de la vie. — (Paolo Giordano, La solitude des nombres premiers, 2008)
        Pour ma part, je suis donc convaincue que la connaissance de l'histoire de la Shoah, des engrenages, et des contextes historiques et politiques qui y ont conduit, doivent rester au cœur des enseignements dans nos écoles et nos universités. — (Simone Veil, discours prononcé à la remise du prix Anetje Fels-Kupferschmidt, Amsterdam, le 26 janvier 2006, dans Simone Veil, Mes combats, Bayard, 2016, page 96)
        (Héraldique) (Rare) Forme abusive de roue d’engrenage.
        D’azur à deux bars adossés d’or accompagnés en chef d’un besant d’or, à dextre et à senestre, de deux cailloux du même et en pointe d’une gerbe de blé aussi d’or; un engrenage de sable brochant sur le tout, qui est de la commune de Saint-Ail de Meurthe-et-Moselle → voir  illustration « armoiries avec un engrenage »
        error'''
        return txt
        print("error")