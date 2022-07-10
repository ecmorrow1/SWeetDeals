from flask import Flask, render_template, request, jsonify
from sqlalchemy import create_engine
from dotenv import load_dotenv
from brain import hello
from flask_cors import CORS
import pandas as pd
import os

import json
import plotly
import plotly.express as px

load_dotenv()

db_password = os.getenv("db_password")
db_username = os.getenv("db_username")
db_url = os.getenv("db_url")
db_port = os.getenv("db_port")
db_name = os.getenv("db_name")
db_table = os.getenv("db_table")
# import brain
# import psycopg2

app = Flask(__name__)
cors = CORS(app)

# @app.route("/")
# def index():

#    return render_template("index_test.html")

# @app.route("/predict",methods=["POST","GET"])
# def predict():

#    if request.method == "POST":
#       # string = str(request.form['exp'])
      
#       db_string = f"postgresql://{db_username}:{db_password}@{db_url}:{db_port}/{db_name}"
#       engine = create_engine(db_string)
#       # df = pd.read_sql('test', con=engine).to_json()
#       # json_data = pd.read_sql(f"SELECT * FROM test WHERE strpos(trip_id,'SNA-PHX')>0 ", con=engine).to_json()
#       # json_data = pd.read_sql(f"SELECT time_stamp,total_cost FROM test WHERE trip_id='LAX-ORD-11/24/2022-11/28/2022' ", con=engine).to_json()
#       df = pd.read_sql(f"SELECT depart_duration,total_cost FROM test WHERE trip_id='LAX-ORD-11/24/2022-11/28/2022' ", con=engine)

#       json_data = jsonify(df)

#       json_data.headers.add("Access-Control-Allow-Origin", "*")

#       # fig = px.line(df)

#       # graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)

#       # return render_template('predict.html',graphJSON=graphJSON)
#       # return df.to_json()
#       # return render_template('index_test.html')
#       return json_data

@app.route("/data",methods=['GET','POST'])
def data():

   db_string = f"postgresql://{db_username}:{db_password}@{db_url}:{db_port}/{db_name}"
   engine = create_engine(db_string)
   # df = pd.read_sql('test', con=engine).to_json()
   # json_data = pd.read_sql(f"SELECT * FROM test WHERE strpos(trip_id,'SNA-PHX')>0 ", con=engine).to_json()
   json_data = pd.read_sql(f"SELECT * FROM {db_table} WHERE trip_id='LAX-ORD-11/24/2022-11/28/2022' ", con=engine)
   
   json_data.set_index("time_stamp")
   # json_data = df

   # json_data = []
   # for x in df:
   #    json_data.append({
   #       "time_stamp":x["time_stamp"],
   #    })

   # print(json_data.to_json())

   return json_data.to_csv(index=False)

@app.route("/data-<trip_id>",methods=['GET','POST'])
def data(trip_id=None):

   db_string = f"postgresql://{db_username}:{db_password}@{db_url}:{db_port}/{db_name}"
   engine = create_engine(db_string)
   # df = pd.read_sql('test', con=engine).to_json()
   # json_data = pd.read_sql(f"SELECT * FROM test WHERE strpos(trip_id,'SNA-PHX')>0 ", con=engine).to_json()
   json_data = pd.read_sql(f"SELECT * FROM {db_table} WHERE trip_id='LAX-ORD-11/24/2022-11/28/2022' ", con=engine)
   
   json_data.set_index("time_stamp")
   # json_data = df

   # json_data = []
   # for x in df:
   #    json_data.append({
   #       "time_stamp":x["time_stamp"],
   #    })

   # print(json_data.to_json())

   return json_data.to_csv(index=False)
   
if __name__ == "__main__":
    app.run(debug=True)