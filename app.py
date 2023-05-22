import check
from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def index():
    with open('index.html', 'r') as index:
        return index.read()

@app.route("/check", methods=['POST'])
def check_pdf():
    if request.method == 'POST':
        pdf = request.files['pdf']
        result = check.toJSON(pdf)
        return result
    else:
        return "Error"