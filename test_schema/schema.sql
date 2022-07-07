CREATE TABLE IF NOT EXISTS test (
	time_stamp timestamp PRIMARY KEY,
	trip_id varchar NOT NULL,
	depart_airport varchar(4) NOT NULL,
	return_airport varchar(4) NOT NULL,
	depart_date date NOT NULL,
	return_date date NOT NULL,
	total_cost float NOT NULL,
	depart_datetime timestamp NOT NULL,
	depart_duration float NOT NULL,
	depart_stops float NOT NULL,
	return_datetime timestamp NOT NULL,
	return_duration float NOT NULL,
	return_stops float NOT NULL
)

SELECT * FROM test;

ALTER TABLE test DROP COLUMN index;
ALTER TABLE test RENAME COLUMN timestamp TO time_stamp;

DROP TABLE IF EXISTS test;