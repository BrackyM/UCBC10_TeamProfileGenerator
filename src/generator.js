const Employee = require("../lib/Employee");


function generateTeam (team) {
   var html = `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
    ${team.map(generateHTML).join("")}
   </body>
   </html>`

    return html
}

function generateHTML (employee) {
    if (employee.getRole() === "Manager"){
        return generateManagerHTML(employee)
    } else if (employee.getRole() === "Engineer"){
        return generateEngineerHTML(employee)
    } else if (employee.getRole() === "Intern"){
        return generateInternHTML(employee)
    }
}

function generateManagerHTML(manager){
    return `<div> Manager: ${manager.getName()} </div>`
}

function generateEngineerHTML(engineer){
    return `<div> Engineer: ${engineer.getName()} </div>`
}

function generateInternHTML(intern){
    return `<div> Intern: ${intern.getName()} </div>`
}

module.exports = generateTeam;