--Question 1

SELECT id,name,price
FROM public.items
ORDER BY price

--2-

SELECT id,name,price
FROM public.items
WHERE price>=80
ORDER BY price DESC

--3- 
SELECT fname,lname
FROM public.customers
order by lname
FETCH FIRST 3 ROW ONLY

--4-
SELECT lname
FROM public.customers
order by lname DESC

--5--
CREATE TABLE purchases (
    id serial PRIMARY KEY,
	item_id integer references public.items (id) NOT NULL,
    customer_id  integer  references public.customers (id) NOT NULL);
--6--
--Insert purchases for the customers, use subqueries:
--Scott Scott bought one fan:
INSERT INTO public.purchases (quantity_purchased,customer_id,item_id)
VALUES (
	1,
	(SELECT id FROM public.customers WHERE lname = 'Scott' and fname = 'Scott'), 
	(SELECT id FROM public.items WHERE name = 'Fan')
--Melanie Johnson bought ten large desks
--Greg Jones bougth two small desks   
INSERT INTO public.purchases (quantity_purchased,customer_id,item_id)
VALUES (
	10,
	(SELECT id FROM public.customers WHERE lname = 'Melanie' and fname = 'Johnson'), 
	(SELECT id FROM public.items WHERE name = 'Large Desk')
	),
	(2,
	(SELECT id FROM public.customers WHERE lname = 'Greg' and fname = 'Jones'), 
	(SELECT id FROM public.items WHERE name = 'Small Desk')
	)                                           
-----------------------------------------------------------------------------------------------------
  --PART 2--
  --QUESTION 1    
-- All purchases. Is this information useful to us? No, cause it's all displayed as id's
SELECT purchase_id, customer_id, item_id, quantity_purchased FROM public.purchases
-- All purchases, joining with the customers table.
SELECT purchase_id, quantity_purchased, customer_firstname, customer_lastname, item_name
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id;
-- Purchases of the customer with the ID equal to 5.
SELECT purchase_id, quantity_purchased, customer_firstname, customer_lastname, item_name
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id
WHERE customers.customer_id = 5;
-- Purchases for a large desk AND a small desk
SELECT purchase_id, quantity_purchased, customer_firstname, customer_lastname, item_name
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id
WHERE items.item_name = 'Large Desk' OR items.item_name = 'Small Desk';
-- QUESTION 2
-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- 1-Customer first name
-- 2-Customer last name
-- 3-Item name
SELECT distinct item_name, customer_firstname, customer_lastname
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id
--QUESTION 3
--Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
insert into public.purchases(customer_id, quantity_purchased) values
  ((select customer_id
  from public.customers
  where customer_firstname = 'Scott' AND customer_lastname = 'Scott'),
  --Yes it works because we didn't define 'item_id' column as NOT NULL






