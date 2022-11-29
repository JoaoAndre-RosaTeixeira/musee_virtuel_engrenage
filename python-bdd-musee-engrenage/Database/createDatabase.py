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


def create_table(conn, name, cols):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    # YOUR CODE
    cur = conn.cursor()
    cur.execute(f"CREATE TABLE IF NOT EXISTS {name}({cols})")

def inset_into(conn):
    cur = conn.cursor()
    cur.execute('''INSERT INTO engrenage 
                (nomEngrenage, avantage, inconvenient, image, Date , userName) 
                VALUES (
                'engrenages cylindriques', 
                ('Les engrenages cylindriques a denture droite,
                Simple et economique, 
                Pas d efforts axiaux'),
                ('Vitesses de rotation limitees, 
                BruyantEntraxes prenant des valeurs finies'), 
                'noUrl', 
                '2022-11-28',
                'Lakhbir'
                )
                 ''')

    cur.execute('''INSERT INTO engrenage 
                (nomEngrenage, avantage, inconvenient, image, Date , userName) 
                VALUES (
                'Les engrenages cylindriques a denture helicoidale', 
                ('Transmission plus souple et moins bruyante, 
                Transmission d efforts et de vitesses plus importants,
                Possibilites d entraxes infinis'),
                ('Possibilites d entraxes infinis, 
                Effort axial supplementaire,
                Solution moins economique, Rendement moins bon'), 
                'noUrl', 
                '2022-11-28',
                'Lakhbir'
                ) 
    ''')

    cur.execute('''INSERT INTO engrenage 
                    (nomEngrenage, avantage, inconvenient, image, Date , userName) 
                    VALUES (
                    'Les engrenages cylindriques a denture helicoidale', 
                    ('Transmission plus souple et moins bruyante, 
                    Transmission d efforts et de vitesses plus importants,
                    Possibilites d entraxes infinis'),
                    ('Possibilites d entraxes infinis, 
                    Effort axial supplementaire,
                    Solution moins economique, Rendement moins bon'), 
                    'noUrl', 
                    '2022-11-28',
                    'Lakhbir'
                    ) 
        ''')
    cur.execute('''INSERT INTO engrenage 
                    (nomEngrenage, avantage, inconvenient, image, Date , userName) 
                    VALUES (
                    'Les engrenages cylindriques a denture helicoidale', 
                    ('Transmission plus souple et moins bruyante, 
                    Transmission d efforts et de vitesses plus importants,
                    Possibilites d entraxes infinis'),
                    ('Possibilites d entraxes infinis, 
                    Effort axial supplementaire,
                    Solution moins economique, Rendement moins bon'), 
                    'noUrl', 
                    '2022-11-28',
                    'Lakhbir'
                    ) 
        ''')
    cur.execute('''INSERT INTO engrenage 
                    (nomEngrenage, avantage, inconvenient, image, Date , userName) 
                    VALUES (
                    'Les engrenages cylindriques a denture helicoidale', 
                    ('Transmission plus souple et moins bruyante, 
                    Transmission d efforts et de vitesses plus importants,
                    Possibilites d entraxes infinis'),
                    ('Possibilites d entraxes infinis, 
                    Effort axial supplementaire,
                    Solution moins economique, Rendement moins bon'), 
                    'noUrl', 
                    '2022-11-28',
                    'Lakhbir'
                    ) 
        ''')
    cur.execute('''INSERT INTO engrenage 
                    (nomEngrenage, avantage, inconvenient, image, Date , userName) 
                    VALUES (
                    'Les engrenages cylindriques a denture helicoidale', 
                    ('Transmission plus souple et moins bruyante, 
                    Transmission d efforts et de vitesses plus importants,
                    Possibilites d entraxes infinis'),
                    ('Possibilites d entraxes infinis, 
                    Effort axial supplementaire,
                    Solution moins economique, Rendement moins bon'), 
                    'noUrl', 
                    '2022-11-28',
                    'Lakhbir'
                    ) 
        ''')
    cur.execute('''INSERT INTO engrenage 
                    (nomEngrenage, avantage, inconvenient, image, Date , userName) 
                    VALUES (
                    'Les engrenages cylindriques a denture helicoidale', 
                    ('Transmission plus souple et moins bruyante, 
                    Transmission d efforts et de vitesses plus importants,
                    Possibilites d entraxes infinis'),
                    ('Possibilites d entraxes infinis, 
                    Effort axial supplementaire,
                    Solution moins economique, Rendement moins bon'), 
                    'noUrl', 
                    '2022-11-28',
                    'Lakhbir'
                    ) 
        ''')

    conn.commit()


# the name of the database
db_name = "dataEngrenage.db"


def main():
    conn = create_connection(db_name)

    try:
        if conn is not None:
            # create exchange table
            # YOUR CODE
            create_table(conn, "engrenage", '''
                                id integer PRIMARY KEY AUTOINCREMENT, 
                                nomEngrenage VARCHAR(255) NOT NULL, 
                                avantage VARCHAR(255) NOT NULL, 
                                inconvenient VARCHAR(255) NOT NULL, 
                                image VARCHAR(255) NOT NULL, 
                                Date DATE, 
                                userName VARCHAR(255) NOT NULL 
                                ''')
            inset_into(conn)

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


