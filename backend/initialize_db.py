from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

uri = os.getenv("URI")
client = MongoClient(uri)
db = client["Data"]
col1 = db["Users"]
col2 = db["Activities"]
col3 = db["Comments"]
print("connected to all collections")

users = [
    {"username": "coach", "password": "coachpassword"},
    {"username": "player", "password": "playerpassword"}
]
col1.insert_many(users)
print("inserted two users")

# col1.insert_one(test_data)
# col2.insert_one(test_data)
# col3.insert_one(test_data)
# print("inserted test data to all collections")

