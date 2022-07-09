# Flask will import the data from SL and return it as json using jsonify
# deploy your app to heroku.com
# d3 should read from the route you created instead of csv file using d3.json("https://yourappname.herokuapp.com/jsonroute")

from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/data")
def data_json():
    return 1

@app.route("/push_to_rds")
def push_to_rds():
    return 2