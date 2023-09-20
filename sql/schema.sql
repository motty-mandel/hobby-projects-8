DROP DATABASE IF EXISTS myCompany_db;
CREATE DATABASE myCompany_db;

USE myCompany_db;

CREATE TABLE departments(
    id INT AUTO_INCREMENT NOT NULL,
    db_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
