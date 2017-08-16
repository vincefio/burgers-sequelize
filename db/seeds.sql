-- INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
-- INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
-- INSERT INTO burgers (burger_name, devoured) VALUES ('Pizza Burger', FALSE);

INSERT INTO burgers(burger_name, devoured, date)
VALUES("King Kong Burger", false, DAYNAME(date)),
("Big Beefy", false, DAYNAME(date)),
("Manwich", false, DAYNAME(date)),
("Vince Deluxe", false, DAYNAME(date));

SELECT * FROM burgers;

