import os
import sqlite3
from sqlite3 import Error


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



def insert_into(conn, name, nomEngrenage, avantage, inconvenient, image, Date, userName):
    cur = conn.cursor()
    cur.execute(f'''INSERT INTO {name} 
                (id, nomEngrenage, avantage, inconvenient, image, Date , userName) 
                VALUES (
                ?,
                {nomEngrenage}, 
                ({avantage}),
                ({inconvenient}), 
                {image}, 
                {Date},
                {userName}
                )
                 ''')

    conn.commit()


# the name of the database
db_name = "dataEngrenage.db"


def createEngrenageSQL(nomEngrenage, avantage, inconvenient, image, Date, userName):
    conn = create_connection(db_name)

    try:
        if conn is not None:
            # create exchange table
            # YOUR CODE
            insert_into(conn, "engrenage", {nomEngrenage}, {avantage}, {inconvenient}, {image}, {Date}, {userName})

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


