import check
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app, origins=[os.environ.get('FRONTEND_URL')])

@app.route("/check", methods=['POST'])
def check_pdf():
    if request.method == 'POST':
        pdf = request.files['pdf']
        result = check.toJSON(pdf)
        return result
    else:
        return "Error"