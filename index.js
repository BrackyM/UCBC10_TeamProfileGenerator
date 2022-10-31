const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const generateTeam = require("./generator")
const fs = require('fs');

const managerQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is your id?",
        name: 'managerId'
    },
    { 
        type: 'input',
        message: "What is your email",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is your office number ",
        name: 'managerOfficeNumber'
    }
]


const addRoles = [
    {
        type: 'list',
        message: "What kind of employee do you want to add?",
        name: 'addRole',
        choices: [
            "Engineer",
            "Itern"
        ]
    }
]


const engineerQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is your id?",
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "What is your email",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is your github username ",
        name: 'engineerGithub'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is your id?",
        name: 'internId'
    },
    {
        type: 'input',
        message: "What is your email",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is your School? ",
        name: 'internSchool'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName , data , (err, data) => {
        err ? console.log(err) : console.log("Success");
    })
}
let team = []
// TODO: Create a function to initialize app
function createTeam() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(
            answers.managerId,
            answers.managerEmail,
            answers.managerName,
            answers.managerOfficeNumber)
        team.push(manager)
        addEmployee();
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Do you want to add another employee?",
            name: 'addEmployee',
            choices: [
                "yes",
                "no"
            ]
        }
    ]).then((answers) => {
        if (answers.addEmployee === "no"){
            writeToFile("index.html", generateTeam(team))
        } 
    })
}


// Function call to initialize app
createTeam();