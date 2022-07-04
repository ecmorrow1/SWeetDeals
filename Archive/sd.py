from flask import Flask, render_template, request
# import brain
# import psycopg2
from brain import hello
import os

app = Flask(__name__)

@app.route("/")
def index():

   # string = hello()
   # return string
   return render_template("index.html")

@app.route("/predict",methods=["POST"])
def predict():

   if request.method == "POST":
      # string = str(request.form['exp'])
      string = hello()
      return string

   
if __name__ == "__main__":
    app.run(debug=True)