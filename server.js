const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();

const header = () => {
    console.log(
    `
    _______             ______                _____                  _______   _______
    |        |\    /|   |     \   |          /     \    \       /    |         |
    |        | \  / |   |      |  |         /       \    \     /     |         |
    ______   |  \/  |   |_____/   |        |         |    \   /      ______    ______
    |        |      |   |         |        |         |     \ /       |         |
    |        |      |   |         |         \       /       |        |         |
    _______  |      |   |         |______    \_____/        |        _______   _______                
    `)                                                 
};

const sqlDb = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Minemysql1515",
        database: "myCompany",
    },
    console.log("Connection successful")
);

sqlDb.connect( (err) => {
    if (err) {
        console.log(err)
    }
})

header();
mysql.createConnection();