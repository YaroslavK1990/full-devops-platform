from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://postgres:postgres@db:5432/tasks_db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
