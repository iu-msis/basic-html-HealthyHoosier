SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS BooksDB;
USE BooksDB;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
    id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(96),
    author varchar(24),
    yearPublished YEAR,
    publisher varchar(48),
    count int NOT NULL DEFAULT 0,
    msrp decimal(5,2)
);

INSERT INTO books (id, title, author, yearPublished, publisher, count, msrp) VALUES
(1, 'The Cuckoos Egg', 'Cliff Stoll', 2005, 'Pocket Books', 399, 13.69),
(2, 'CISSP (ISC)2 Certified Information Security Professional', 'James Michael Stewart', 2015, 'Sybex', 1405, 40.99),
(3, 'Fear and Loathing in Las Vegas', 'Hunter S. Thompson', 1998, 'Vintage', 204, 8.76),
(4, 'Hacking For Dummies', 'Kevin Beaver', 2013, 'For Dummies', 408, 16.63)