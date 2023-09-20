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

header();

const sqlDb = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Minemysql1515",
        database: "myCompany_db",
    },
    console.log("Connection successful")
);

sqlDb.connect((err) => {
    if (err) {
        console.log(err)
    }
})

const options = () => {
    inquirer
        .prompt(
            {
                type: "list",
                message: "What would you like to do?",
                name: "options",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    'Add a department',
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                ]
            }
        )
        .then((data) => {
            switch (data.options) {
                case "View all departments":
                    viewAllDep();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDep();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update employee role":
                    updateEmployee();
                    break;
            }
        })
};

options();

var viewAllDep = () => {
    sqlDb.query('SOURCE sql/schema.sql', (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result);
    })
    console.log("Good work1");
    options();
};

var viewAllRoles = () => {
    console.log("Good work2");
    options();
};

var viewAllEmployees = () => {
    console.log("Good work3");
    options();
};

var addDep = () => {
    console.log("Good work4");
    options();
};

var addRole = () => {
    console.log("Good work5");
    options();
};

var addEmployee = () => {
    console.log("Good work6");
    options();
};

var updateEmployee = () => {
    console.log("Good work7");
    options();
};
