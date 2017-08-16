-- CREATE DATABASE IF NOT EXISTS burgers_db;
-- USE burgers_db;

-- # If the table already exists, remove it before trying to create the table again
-- DROP TABLE IF EXISTS burgers;

-- # Create the burgers table
-- CREATE TABLE burgers (
-- id int NOT NULL AUTO_INCREMENT,
-- burger_name varchar(255) NOT NULL,
-- devoured BOOL DEFAULT false,
-- PRIMARY KEY (id)
-- );

CREATE DATABASE restaurant_sequelize;
USE restaurant_sequelize;

CREATE TABLE burgers (
	id INT(10) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO burgers(burger_name, devoured, date)
VALUES("King Kong Burger", false, DAYNAME(date)),
("Big Beefy", false, DAYNAME(date)),
("Manwich", false, DAYNAME(date)),
("Vince Deluxe", false, DAYNAME(date));

SELECT * FROM burgers;
