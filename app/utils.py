from django.db import connection



def Add_or_update(query):
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()
    connection.close()
trigger =0