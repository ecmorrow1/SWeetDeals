# SweetDeals

## Overview

This academic project seeks to utilize airline data to attempt to determine the best time to buy tickets for trips to a given destination.  Data are to be analyzed over the course of several days to determine trends and shifts in prices in an attempt to determine when an individual can find the best deals for booking a flight.

This project seeks to demonstrate a culmination of data science skills through the entire length of the data pipeline: data acquisition, data cleaning, data storage, data visualization, and communciation of findings/results from analysis.

The intended use for data collected is an academic exercise intended for the purpose of helping the user find the cheapest times to buy tickets, there is no intention for this tool to have commercial or for-profit use.

## Data Pipeline

### Data Acquisition and cleaning

Python, Selenium, and Beautiful Soup are utilized to interact with the website and generate datasets to be analyzed.  Data are pulled from the website on a daily basis in order to provide a dataset that may demonstrate when price fluctuations occur and when the best time to travel and/or the best time to purchase travel occur.

The sweet_deals.ipynb file is fully functional as a standalone tool for getting flight information, cleaning the data to be set to the correct datatypes, and feeding the data directly into the AWS/Postgres database.

### Data Storage

Given that the data consist entirely of varchar and integers, a PostgreSQL database was built using the AWS platform.  Data are stored on a single table with columns as outlined in the ERD, below:
![SweetDeals ERD](Queries/SweetDeals_ERD.JPG)

Schema and a file of useful queries can be found in the Queries folder.

### Data Visualization

To connect the data pipeline all the way to visualizatoin, an html page has been built to select and display visualizations for "Total Cost vs Days Before Departure" and "Total Cost vs Timestamp for the Date the Data Were Collected".  The page utilizes JavaScript, D3, and Plotly in order to accomplish this.

The data for the visualizations are pulled directly from the database with the use of the sd.py flask app.  The app.js file has been built to pass trip_id info and airport info to the flask app in order to execute the appropriate database connections and retrieve the desired data.  Users are able to select the data that is plotted with the use of dropdown menus that are populated with trip IDs and airport codes acquired through database calls with the sd.py flask app.

As a development tool to verify that the JavaScript app was able to produce the correct graphs, the sweet_deals_visualizations.ipynb notebook was developed to similarly build the graphs using Matplotlib.

## Analysis

### Machine Learning Modeling

Though there is not an explicit goal to utilize machine learning as the instructional team has provided an exemption, given the complexity of the chosen project.  However, ML techniques have been applied and the data have proven to be too variable for the machines to put together a reliable model for how the pricing will occur.

The primary issue can be narrowed down to the amount of data being provided to the model. There was strong innacuracy occurring anytime data were used that represented purchase dates more than 12 days into the future.  The other challenge is that the data are limited for this analysis, since completion of the data acquisition tool 

Future attempts to improve the data for the ML models would be to include data like the airport codes for which connections are taking place, which airports along the journey are hubs, which leg of a flight involving a connection is having the large impact on price, and how many seats are remaining at a given point in time.  With these additions, there is some hope that the ML modeling will be more successful.

### Analysis

Despite the ML techniques being unable to produce a reliable model, the data demonstrate some notable trends

* As the days before purchase approaches zero, the variance in prices increases dramatically
* As the days into the future approaches holiday times, the variance again increases dramatically
* The optimal time to buy appears to be somewhere between 75 days and 150 days from the time the data were collected
    * Note that it is unclear whether this results from the dates being in non-summer/non-holiday months or whether this represents an optimal buying window for any flight.

![Days Before Purchase BOS-SNA](Resources/bos_sna_viz_markup.jpg)<br>
![Days Before Purchase LAX-MUC](Resources/lax_muc_viz_markup.jpg)<br>
![Days Before Purchase LAX-ORD](Resources/lax_ord_viz_markup.jpg)<br>
![Days Before Purchase SFO-IAD](Resources/sfo_iad_viz_markup.jpg)<br>
![Days Before Purchase SJC-MSY](Resources/sjc_msy_viz_markup.JPG)<br>
![Days Before Purchase SNA-PHX](Resources/sna_phx_viz_markup.jpg)<br>


## Improvements and Future Work

* Full deployment of the visualization tools
* Full automation and deployment of the data acquisition tool
    * This task would be challenging since the errors and issues with the carrier website appear to lack consistency.  New errors and issues with the site popped up during the entire data collection period.
* Continuing data collection over a longer period of time
    * This would help determine if seasons have more of an impact than time before purchase
* Expanding the data to help the ML modeling
    * Airport codes for connections
    * Which airports in an itinerary are hubs
    * If connecting, which leg of the flight is impacting the price the most
    * How many seats are remaining on the flight