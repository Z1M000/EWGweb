from pymongo import MongoClient
import os
from dotenv import load_dotenv
from pprint import pprint

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
        "time": "09/06/2025 02:32 PM",
        "text": "Just a reminder that we earned 10 point for that drill earlier."
    },
    {
        "name": "Player",
        "time": "09/11/2025 09:18 AM",
        "text": "I think one of the points from this round may have been missed."
    },
    {
        "name": "Player",
        "time": "09/15/2025 04:47 PM",
        "text": "There should be an extra point for the play-day goal we completed."
    }
]
col.insert_many(comments)
print("inserted sample comments")


# insert activities
# col = db["Activities"]
# print("connected to Activity Col")

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

# activites = []

# for i in range(0, 6):
#     activites.append(create_activity(names[i], points[i], dates[i]))

# pprint(activites)

# col.insert_many(activites)
# print("inserted sample activities")