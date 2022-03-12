-- Exercise 1: DVD Rental
-- Get a list of all film languages
SELECT DISTINCT language.name 
FROM film
INNER JOIN language
ON language.language_id = film.language_id;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages
SELECT language.name, film.title
FROM film
FULL OUTER JOIN language
ON language.language_id = film.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(

    new_film_id serial PRIMARY KEY,
	new_film_name VARCHAR(50)
 );

 INSERT INTO new_film(new_film_name) values
   	('Batman'),
    ('The Terminal'),
    ('Cast Away'),
    ('Dont Look Up');

--Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review(
    review_id serial PRIMARY KEY NOT NULL,
    film_id INTEGER,
    FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE,
    language_id INTEGER,
    FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE,
    title VARCHAR(50),
    score INT NOT NULL
    CHECK (score BETWEEN 1 AND 10),
    review_text VARCHAR,
    last_update  DATE NOT NULL
)

--Add 3 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update) values
   	((select new_film_id from new_film where new_film_name='Batman'),
     (select language_id from language where language_id = (select language_id from film where title='Batman')),
     'title of review',
     10,
     'Very good film',
     '2006-12-14'),

     ((select new_film_id from new_film where new_film_name='The Terminal'),
     (select language_id from language where language_id = (select language_id from film where title='The Terminal')),
     'title of review',
     6,
     'a film for the high taste!',
     '2000-11-13'),

     ((select new_film_id from new_film where new_film_name='Cast Away'),
     (select language_id from language where language_id = (select language_id from film where title='Cast Away')),
     'title of review',
     10,
     'a magnificent film',
     '2001-06-11');

--Delete a film that has a review from the new_film table,
 what happens to the customer_review table?
 DELETE FROM new_film where new_film_name = 'The Terminal';
--The record deleted from review table and also from new_film table



