--Queries - provide us the output of the requests before executing them
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
-- It will create a table called FirstTab with 2 columns
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')
--After this query the 'FirstTab' table will have 4 new records with the details below
SELECT * FROM FirstTab
--We will see the whole FirstTab table
CREATE TABLE SecondTab (
    id integer 
)
--Creation of new empty table named "secondtab"
INSERT INTO SecondTab VALUES
(5),
(NULL)
--After this query the 'SecondTab' table will have 2 new records with the details below
SELECT * FROM SecondTab
-- select all the quaries from the table 'secondtab'
---------------------------------------------------------------------------------------
-- Questions
-- Q1. What will be the OUTPUT of the following statement?
 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--Result= 0 -  SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( EMPTY )
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--Result= 2 - 'Null' isn't including
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--Result=0 SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( 5 )
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--Result=2 - SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( 5 ) ===> 6 , 7