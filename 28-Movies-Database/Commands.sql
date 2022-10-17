CREATE TABLE films (
    name TEXT,
    release_year INTEGER
);


INSERT INTO films (name, release_year) 
VALUES ('Mystery Man', 1999); 
INSERT INTO films (name, release_year) 
VALUES ('Silent Hill', 2006); 

ALTER TABLE films 
ADD COLUMN category TEXT; 

UPDATE films 
SET category = '@taylorswift13' 
WHERE id = 4; 

SELECT * FROM films;

\dt [show all the tables]