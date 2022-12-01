import collections
import os
import sqlite3
from sqlite3 import Error

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



def connectUser(conn, name, nom, password):

    cur = conn.cursor()
    cur.execute(f'''SELECT nom, password FROM {name}
                WHERE nom = '{nom}' and password = '{password}'
                 ''')

    rows = cur.fetchall()
    if len(rows) > 0:
        if rows[0][0] == nom and rows[0][1] == password:
            return True
        else:
            return False
    else:
        return False



# the name of the database
db_name = "dataEngrenage.db"


def connexionUserBDD(nom, password):
    conn = create_connection(db_name)

    try:
        if conn is not None:
            # create exchange table
            # YOUR CODE

            return connectUser(conn, "user", nom, password)

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


