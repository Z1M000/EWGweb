# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from dotenv import load_dotenv
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
    allow_origins = ["http://127.0.0.1:3000", "http://localhost:3000"],
    allow_methods = ["*"],
    allow_headers = ["*"],
)

class LoginRequest(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    username: str

class Activity(BaseModel):
    name: str
    points: int
    date: str

class Comment(BaseModel):
    name: str
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
    )
    return response

@app.get("/activities")
def get_activities():
    print("frontend wants all activities")
    acts = list(act_col.find({}, {"_id": 0}).sort("date", -1))
    return acts

@app.post("/activities")
def store_activity(act: Activity):
    print("Storing an activity to backend")
    act_col.insert_one(act.dict())
    return {"status": "success"}


@app.get("/comments")
def get_comments():
    print("frontend wants all comments")
    comments = list(com_col.find({}, {"_id": 0}).sort("time", -1))
    return comments

@app.post("/comments")
def store_comment(com: Comment):
    print("Storing comments to backend")
    com_col.insert_one(com.dict())
    return {"status": "success"}
