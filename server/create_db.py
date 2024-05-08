# create_db.py

from main import app, db

# Create the database tables
with app.app_context():
    db.create_all()
