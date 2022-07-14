-- Methods for selection
SELECT * FROM test;
SELECT * FROM sweetdealtrip;
SELECT COUNT(*) FROM sweetdealtrip;
SELECT * FROM sweetdealtrip WHERE trip_id='BOS-SNA-07/09/2022-07/14/2022';

-- Methods for selecting rows based on partial strings
SELECT * FROM sweetdealtrip WHERE strpos(trip_id,'SNA-PHX')>0;
SELECT * FROM sweetdealtrip WHERE strpos(trip_id,'LAX-PHX')>0;
SELECT * FROM sweetdealtrip WHERE strpos(trip_id,'SNA-ORD')>0;
SELECT * FROM sweetdealtrip WHERE strpos(trip_id,'2022-06-30')>0;

SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-11';
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-10' AND strpos(trip_id,'SNA-PHX')>0;
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-10' AND strpos(trip_id,'SFO-IAD')>0;
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-10' AND strpos(trip_id,'SJC-MSY')>0;
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-10' AND strpos(trip_id,'BOS-SNA')>0;
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-10' AND strpos(trip_id,'LAX-MUC')>0;
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-10' AND strpos(trip_id,'LAX-ORD')>0;

SELECT * FROM sweetdealtrip WHERE depart_airport='BOS';
SELECT * FROM sweetdealtrip WHERE depart_airport='SNA';
SELECT * FROM sweetdealtrip WHERE depart_airport='SFO';
SELECT * FROM sweetdealtrip WHERE depart_airport='SJC';
SELECT * FROM sweetdealtrip WHERE depart_airport='LAX';

SELECT * FROM sweetdealtrip WHERE depart_date='2022-07-14';

SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-09' AND strpos(trip_id,'LAX-ORD')>0;
SELECT * FROM sweetdealtrip WHERE time_stamp>'2022-07-10';

SELECT * FROM sweetdealtrip WHERE days_before_purchase < 61;

-- Methods for altering tables by either dropping or renaming columns
ALTER TABLE sweetdealtrip DROP COLUMN index;
ALTER TABLE sweetdealtrip RENAME COLUMN timestamp TO time_stamp;

-- -- Methods for dropping tables
-- DROP TABLE IF EXISTS test;
-- DROP TABLE IF EXISTS sweetdealtrip;

-- -- Methods for clearing tables
-- DELETE FROM sweetdealtrip WHERE TRUE;
-- DELETE FROM sweetdealtrip WHERE time_stamp>'2022-07-08';
DELETE FROM sweetdealtrip WHERE strpos(trip_id,'2022-06-23')>0;