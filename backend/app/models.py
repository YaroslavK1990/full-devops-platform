from sqlalchemy import Column, Integer, String
from app.database import engine
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)

Base.metadata.create_all(bind=engine)
