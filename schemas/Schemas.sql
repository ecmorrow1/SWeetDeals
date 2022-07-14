CREATE TABLE IF NOT EXISTS sweetdealtrip (
	time_stamp timestamp PRIMARY KEY,
	trip_id varchar NOT NULL,
	depart_airport varchar(4) NOT NULL,
	return_airport varchar(4) NOT NULL,
	depart_date date NOT NULL,
	return_date date NOT NULL,
	total_cost integer NOT NULL,
	depart_datetime timestamp NOT NULL,
	depart_duration integer NOT NULL,
	depart_stops integer NOT NULL,
	return_datetime timestamp NOT NULL,
	return_duration integer NOT NULL,
	return_stops integer NOT NULL,
	days_before_purchase integer NOT NULL
)

CREATE TABLE IF NOT EXISTS test (
	time_stamp timestamp PRIMARY KEY,
	trip_id varchar NOT NULL,
	depart_airport varchar(4) NOT NULL,
	return_airport varchar(4) NOT NULL,
	depart_date date NOT NULL,
	return_date date NOT NULL,
	total_cost integer NOT NULL,
	depart_datetime timestamp NOT NULL,
	depart_duration integer NOT NULL,
	depart_stops integer NOT NULL,
	return_datetime timestamp NOT NULL,
	return_duration integer NOT NULL,
	return_stops integer NOT NULL,
	days_before_purchase integer NOT NULL
)