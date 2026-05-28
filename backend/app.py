from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

from config import Config
from extensions import db

app = Flask(__name__)

app.config.from_object(Config)

CORS(app)

db.init_app(app)

from models.resume_models import ResumeAnalysis
from routes.resume_routes import resume_bp

app.register_blueprint(resume_bp)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)