// global constants
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./generator");

let team = [];

// array of questions for managers
const managerQuestions = [
  {
    type: "input",
    message: "Welcome new manager! What is your name?",
    name: "managerName",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your manager id?",
    name: "id",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your management email",
    name: "email",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your office number ",
    name: "officeNumber",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
];

// array of questions for engineers
const engineerQuestions = [
  {
    type: "input",
    message: "What is your Engineer's name?",
    name: "engineerName",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your Engineer's id?",
    name: "id",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your Engineer's email",
    name: "email",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your Engineer's github username ",
    name: "github",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
];
// array of questions for interns
const internQuestions = [
  {
    type: "input",
    message: "What is your Intern's name?",
    name: "internName",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your Intern's id?",
    name: "id",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your Intern's email",
    name: "email",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your Intern's School? ",
    name: "school",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title");
        return false;
      }
    },
  },
];
// function that prompts the user to add more employees
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addTeamMember",
        message: "Do you want to add another employee?",
        choices: ["yes", "no"],
      },
    ])
    .then(function (answer) {
      if (answer.addTeamMember === "yes") {
        addRole();
      } else {
        writeToFile(generateTeam(team));
      }
    });
}
// function that specifies the type of employee
function addRole() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What kind of employee do you want to add?",
        name: "addRole",
        choices: ["engineer", "intern"],
      },
    ])
    .then(function (answer) {
      if (answer.addRole === "engineer") {
        newEngineerEntry();
      } else {
        newInternEntry();
      }
    });
}

function newManagerEntry() {
  inquirer.prompt(managerQuestions).then(function (answer) {
    console.log(answer);
    const manager = new Manager(
      answer.managerName,
      answer.id,
      answer.email,
      answer.officeNumber
    );
    team.push(manager);
    addTeamMember();
  });
}

function newEngineerEntry() {
  inquirer.prompt(engineerQuestions).then(function (answer) {
    const engineer = new Engineer(
      answer.engineerName,
      answer.id,
      answer.email,
      answer.github
    );
    team.push(engineer);
    addTeamMember();
  });
}

function newInternEntry() {
  inquirer.prompt(internQuestions).then(function (answer) {
    const intern = new Intern(
      answer.internName,
      answer.id,
      answer.email,
      answer.school
    );
    team.push(intern);
    addTeamMember();
  });
}

const writeToFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
      });
    });
  });
};

// Function call to initialize app
newManagerEntry();
