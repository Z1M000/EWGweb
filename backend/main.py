# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId
import os

load_dotenv()

uri = os.getenv("URI")
client = MongoClient(uri)
db = client["Data"]
act_col = db["Activities"]  
print("connected to activities col")      
users_col = db["Users"]
print("connected to user col")
com_col = db["Comments"]


# --- FastAPI app ---
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["https://ewgweb.onrender.com, https://ewg-web1-a8kmquzvk-katie-parks-projects.vercel.app"],
    allow_methods = ["*"],
    allow_headers = ["*"],
)

class LoginRequest(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    username: str
    role: str

class Comment(BaseModel):
    name: str
    role: str
    time: int
    text: str

class Activity(BaseModel):
    name: str
    points: int
    date: int

@app.post("/login")
def login(request: LoginRequest):
        
    print("frontend requested login")
    
    user = users_col.find_one({"username": request.username})

    if not user or user.get("password") != request.password:
        raise HTTPException(status_code = 401)

    response = LoginResponse(
        username = request.username,
        role=user.get("role")
    )
    return response

@app.get("/activities")
def get_activities():
    print("frontend wants all activities")
    acts = []
    for a in act_col.find({}).sort("date", -1):
        a["_id"] = str(a["_id"])
        acts.append(a)
    return acts

@app.post("/activities")
def store_activity(act: Activity):
    print("Storing an activity to backend")
    act_col.insert_one(act.dict())
    return {"status": "success"}

@app.delete("/activities/{id}")
def delete_activity(id: str):
    result = act_col.delete_one({"_id": ObjectId(id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Activity not found")
    return {"status": "deleted"}

@app.get("/comments")
def get_comments():
    comments = []
    for c in com_col.find({}).sort("date", -1):
        c["_id"] = str(c["_id"])
        comments.append(c)
    return comments

@app.post("/comments")
def store_comment(com: Comment):
    print("Storing comments to backend")
    com_col.insert_one(com.dict())
    return {"status": "success"}

@app.delete("/comments/{id}")
def delete_comment(id: str):
    result = com_col.delete_one({"_id": ObjectId(id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Comment not found")
    return {"status": "deleted"}
