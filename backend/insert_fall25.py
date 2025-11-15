from pymongo import MongoClient
import os
from dotenv import load_dotenv
from pprint import pprint
from datetime import datetime

load_dotenv()

uri = os.getenv("URI")
client = MongoClient(uri)
db = client["Data"]
db.drop_collection("Comments")
# insert comments
col = db["Comments"]
print("connected to Comments col")
comments = [
    {
        "name": "Coach",
        "time": 1757194320000,   # 09/06/2025 02:32 PM
        "text": "Just a reminder that we earned 10 point for that drill earlier."
    },
    {
        "name": "Player",
        "time": 1757572680000,   # 09/11/2025 09:18 AM
        "text": "I think one of the points from this round may have been missed."
    },
    {
        "name": "Player",
        "time": 1757947620000,   # 09/15/2025 04:47 PM
        "text": "There should be an extra point for the play-day goal we completed."
    }
]
col.insert_many(comments)
print("inserted sample comments")


# insert activities
db.drop_collection("Activities")
col2 = db["Activities"]
print("connected to Activity Col")

# def create_activity(name, points, date):
#     obj = {
#         "name": name,
#         "points": points,
#         "date": date
#     }
#     return obj

# names = [
#     "Team win",
#     "Team round under-par",
#     "Break scoring record",
#     "Even or under on par 5s",
#     "Play day goal - KP",
#     "Close-out Drill",
#     "Community service example",
# ]

# points = [
#     100,
#     50,
#     100,
#     25,
#     20,
#     10,
#     50,
# ]

# dates = [
#     "2025-09-06",
#     "2025-09-15",
#     "2025-09-20",
#     "2025-09-25",
#     "2025-09-30",
#     "2025-10-04",
#     "2025-10-14"
# ]

activities = [
    {
        "name": "Team win",
        "points": 100,
        "date": 1757116800000
    },
    {
        "name": "Team round under-par",
        "points": 50,
        "date": 1757808000000
    },
    {
        "name": "Break scoring record",
        "points": 100,
        "date": 1758240000000
    },
    {
        "name": "Even or under on par 5s",
        "points": 25,
        "date": 1758672000000
    },
    {
        "name": "Play day goal - KP",
        "points": 20,
        "date": 1759104000000
    },
    {
        "name": "Close-out Drill",
        "points": 10,
        "date": 1759507200000
    },
    {
        "name": "Community service example",
        "points": 50,
        "date": 1760400000000
    }
]

# for i in range(0, 6):
#     activites.append(create_activity(names[i], points[i], dates[i]))

pprint(activities)

col2.insert_many(activities)
print("inserted sample activities")