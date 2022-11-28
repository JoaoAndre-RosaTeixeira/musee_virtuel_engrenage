import os
import sqlite3
from sqlite3 import Error



def getEngrenage(id):

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



    # the name of the database
    db_name = "db/dataTestBis.db"

    def main():

        conn = create_connection(db_name)

        try:
            if conn is not None:
                # create exchange table
                # YOUR CODE
                getEngrenage()

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

    main()
