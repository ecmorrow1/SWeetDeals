# SweetDeals

## Overview

This academic project seeks to utilize airline data to attempt to determine the best time to buy tickets for trips to a given destination.  Data are to be analyzed over the course of several days to determine trends and shifts in prices in an attempt to determine when an individual can find the best deals for booking a flight.

This project seeks to demonstrate a culmination of data science skills through the entire length of the data pipeline: data generation, data cleaning, data storage, data visualization, and communciation of findings/results from analysis.

The intended use for data collected is an academic exercise intended for the purpose of helping the user find the cheapest times to buy tickets, there is no intention for this tool to have commercial or for-profit use.

## Data Pipeline

### Data Generation

Python, Selenium, and Beautiful Soup are utilized to interact with the website and generate the dataset to be analyzed.  Data are pulled from the website on a daily basis in order to provide a dataset that may demonstrate when price fluctuations occur.

The sweet_deals.ipynb file is fully functional as a standalone tool for getting flight information.

### Data Cleaning

Data generated from the Python and Selenium tools will be cleaned using Python such that only the most pertinent information is utilized for analysis.  The data to be loaded into the database after cleaning will include:

time_stamp (primary_key)</br>
trip_id [example: LAX->SMF 06/22/2022 - 06/24/2022]</br>
departing_airport_code</br>
visiting_airport_code</br>
departure_date (including time)</br>
return_date (including time)</br>
total_cost</br>
trip_duration</br>
number_of_stops</br>
total_layover_duration</br>

In order to feed the machine learning model, a new variable will be calculated from the time delta between time_stamp (the exact time a datum was collected) and the departure date.  This number is to be used in model training in order to determine how many days prior to a departure that a price drop can be expected to happen.

### Data Storage

An AWS relational database has been established and schema for the database are in use.

### Flask App

A flask app is under development to tie together all of the related components of the project, including data collection, storage, retrieval, and presentation.

### Analysis

#### Primary Analysis

Data will be analyzed with Python, Matplotlib, and other tools to determine trends in the data to see if optimal times to purchase tickets can be determined.

#### Machine Learning

Though there is not an explicit goal to utilize machine learning as the instructional team has provided an exemption, given the complexity of the chosen project, the stretch goal will be to utilize unsupervised machine learning to find trends in data over time.

### Data Visualization

Javascript, html, and D3 are being utilized to provide visualization of the data and the findings.