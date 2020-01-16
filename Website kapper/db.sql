DROP DATABASE kapperapp;
DROP USER 'kapper'@'localhost';

CREATE DATABASE kapperapp;

USE kapperapp;

CREATE USER 'kapper'@'localhost' IDENTIFIED BY 'oa199515';
GRANT ALL PRIVILEGES ON * . * TO 'kapper'@'localhost';

CREATE TABLE afspraak (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    datum DATE NOT NULL,
    tijdstip TIME NOT NULL,
    kapper VARCHAR(256) NOT NULL,
    firstname VARCHAR(256) NOT NULL,
    lastname VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL,
    behandeling VARCHAR(256) NOT NULL,
    gender VARCHAR(1) NOT NULL

);