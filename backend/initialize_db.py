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

test_data = {
    "message": "this is the test data"
}

# col1.insert_one(test_data)
# col2.insert_one(test_data)
# col3.insert_one(test_data)
# print("inserted test data to all collections")

