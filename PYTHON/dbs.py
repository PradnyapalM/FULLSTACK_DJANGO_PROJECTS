import mysql.connector
from mysql.connector import cursor  
#Create the connection object   
myconn = mysql.connector.connect(host = "localhost", user = "root",passwd = "1234")  
  
#printing the connection object   
print(myconn)  

cursor = myconn.cursor()

print(cursor)

cursor.execute('show databases')

records=cursor.fetchall()

print(records) 