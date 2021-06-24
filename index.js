const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');

function teamMemberInput() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name:"name"
            },{
                type: "input",
                message: "What is your ID number?",
                name:"name"
            },{
                type: "input",
                message: "What is your email?",
                name:"name"
            },{
                type: "checkbox",
                message: "What is your role?(Use spacebar to select)",
                name:"Role",
                choices: ['Engineer', 'Intern', 'Manager']
            }
        ])
        .then((data) =>{
            if (data.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "Github",
                        message: "Enter Github username:"
                    }
                                    ])
            }
        }
