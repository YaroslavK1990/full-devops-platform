from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Fake DB
tasks = []

class Task(BaseModel):
    title: str
    description: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/tasks")
def get_tasks():
    return tasks

@app.post("/tasks")
def create_task(task: Task):
    tasks.append(task)
    return {"message": "Task created", "task": task}