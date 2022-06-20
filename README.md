# SweetDeals

## Overview

This academic project seeks to utilize airline data to attempt to determine the best time to buy tickets for trips to a given destination.  Data are to be analyzed over the course of several days to determine trends and shifts in prices in an attempt to determine when an individual can find the best deals for booking a flight.

This project seeks to demonstrate a culmination of data science skills through the entire length of the data pipeline: data generation, data cleaning, data storage, data visualization, and communciation of findings/results from analysis.

The intended use for data collected is an academic exercise intended for the purpose of helping the user find the cheapest times to buy tickets, there is no intention for this tool to have commercial or for-profit use.

## Data Pipeline

### Data Generation

Python and Selenium are utilized to ineteract with the website and generate the dataset to be analyzed.  Data will be generated from the website's HTML on a daily basis in order to provide a dataset that may demonstrate when price fluctuations occur.

### Data Cleaning

Data generated from the Python and Selenium tools will be cleaned using Python such that only the most pertinent information is utilized for analysis.  The data to be loaded into the database after cleaning will include:

trip_id (primary_key) [example: LAX->SMF 06/22/2022 - 06/24/2022]
departing_airport_code
visiting_airport_code
departure_date (including time)
return_date (including time)
total_cost
trip_duration
number_of_stops
total_layover_duration

### Data Storage

PostgreSQL and AWS relational database tools are planned to be used for this element of the pipeline.

### Analysis

#### Primary Analysis

Data will be analyzed with Python, Matplotlib, and other tools to determine trends in the data to see if optimal times to purchase tickets can be determined.

#### Machine Learning

Though there is not an explicit goal to utilize machine learning as the instructional team has provided an exemption, given the complexity of the chosen project, the stretch goal will be to utilize unsupervised machine learning to find trends in data over time.

### Data Visualization

Javascript, html, and D3 will be utilized to provide visualization of the data and the findings.