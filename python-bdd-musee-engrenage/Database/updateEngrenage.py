import sqlite3
from sqlite3 import Error
import collections

from flask import jsonify


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    # YOUR CODE
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
        return conn
    except Error as e:
        print(e)


def selectEngrenage(conn, id):
    cur = conn.cursor()
    cur.execute(f'''
    SELECT * FROM engrenage 
    WHERE id = {id}

                 ''')
    rows = cur.fetchall()

    objects_list = []
    for row in rows:
        d = collections.OrderedDict()
        d['id'] = int(row[0])
        d['nomEngrenage'] = row[1]
        d['avantage'] = row[2]
        d['inconvenient'] = row[3]
        d['image'] = row[4]
        d['Date'] = row[5]
        d['userName'] = row[6]
        objects_list.append(d)

    return jsonify(objects_list[0])


# the name of the database
db_name = "dataEngrenage.db"


def getForUpdateEngrenageSQL(id):
    conn = create_connection(db_name)

    try:
        if conn is not None:
            # create exchange table
            # YOUR CODE
            return selectEngrenage(conn, id)

        else:
            print("Error! cannot create the database connection.")
    except Error as e:
        print(e)
    finally:
        if conn:
            # conn.commit()
            # cur = conn.cursor()
            # cur.execute("SELECT * FROM exchange")
            # df = pd.DataFrame(cur.fetchall(),columns = ['id','name','currency','code'])
            # print(df)
            conn.close()

def updateEngrenageSQL(idEngrenage, nomEngrenage, avantage, inconvenient, image, Date, userName):
    conn = create_connection(db_name)

    try:
        if conn is not None:
            # create exchange table
            # YOUR CODE
            cur = conn.cursor()
            cur.execute(f'''UPDATE engrenage 
            SET nomEngrenage = '{nomEngrenage}',
            avantage = '({avantage})',
            inconvenient = '({inconvenient})',
            image = '{image}',
            Date = '{Date}',
            userName = '{userName}',
            WHERE id = {idEngrenage}''')

        else:
            print("Error! cannot create the database connection.")
    except Error as e:
        print(e)
    finally:
        if conn:
            # conn.commit()
            # cur = conn.cursor()
            # cur.execute("SELECT * FROM exchange")
            # df = pd.DataFrame(cur.fetchall(),columns = ['id','name','currency','code'])
            # print(df)
            conn.close()
    print("ici")


