
-- Methods for selection
SELECT * FROM test;
SELECT * FROM sweetdealtrip;
SELECT * FROM sweetdealtrip WHERE trip_id='BOS-SNA-07/09/2022-07/14/2022';

-- Methods for selecting rows based on partial strings
SELECT * FROM sweetdealtrip WHERE strpos(trip_id,'SNA-PHX')>0;
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-08';

-- Methods for altering tables by either dropping or renaming columns
ALTER TABLE sweetdealtrip DROP COLUMN index;
ALTER TABLE sweetdealtrip RENAME COLUMN timestamp TO time_stamp;

-- Methods for dropping tables
DROP TABLE IF EXISTS test;
DROP TABLE IF EXISTS sweetdealtrip;

-- -- Methods for clearing tables
-- DELETE FROM sweetdealtrip WHERE TRUE;
-- DELETE FROM sweetdealtrip WHERE time_stamp>'2022-07-08';