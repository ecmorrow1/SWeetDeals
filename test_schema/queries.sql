SELECT * FROM sweetdealtrip;
SELECT * FROM test;

SELECT * FROM test WHERE trip_id='BOS-SNA-07/09/2022-07/14/2022';

ALTER TABLE test DROP COLUMN index;
ALTER TABLE test RENAME COLUMN timestamp TO time_stamp;

DROP TABLE IF EXISTS test;