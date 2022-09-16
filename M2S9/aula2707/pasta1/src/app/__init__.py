import os 
from flask import Flask
from src.app.config import app_config


app = Flask(__name__)


@app.route('/developers/')
def hello_world():
    data = "2"

    return "<p>Hello</p>"
