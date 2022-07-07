from flask import Flask, render_template, request, jsonify
from sqlalchemy import create_engine
from brain import hello
import pandas as pd
import os
# import brain
# import psycopg2

# from config import db_password
from config import db_password
from config import db_username
from config import db_url
from config import db_port
from config import db_name



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
      
      db_string = f"postgresql://{db_username}:{db_password}@{db_url}:{db_port}/{db_name}"
      engine = create_engine(db_string)
      df = pd.read_sql('test', con=engine).to_json()
      # df = df.to_json()

      # string = hello()
      return df

   
if __name__ == "__main__":
    app.run(debug=True)