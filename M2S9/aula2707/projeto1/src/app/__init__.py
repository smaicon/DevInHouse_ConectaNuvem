from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
import os
from src.app.config import app_config

#Após a execução da variável app
app.config.from_object(app_config[os.getenv('FLASK_ENV')])

