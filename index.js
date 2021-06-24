const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const teamArray = [];


function teamMemberInput() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name:"Name"
            },{
                type: "input",
                message: "What is your ID number?",
                name:"ID"
            },{
                type: "input",
                message: "What is your email?",
                name:"Email"
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
                    .then((roleField) => {
                        let newMember = new Engineer(data.name, data.id, data.email, roleField.github);
                        teamArray.push(newMember);
                        addUser();
                    })
            }
            else if (data.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "What school you're attending"
                    }
                ])
                    .then((roleField) => {
                        let newMember = new Intern(data.name, data.id, data.email, roleField.github);
                        teamArray.push(newMember);
                        addUser();
                    })
            }
            else {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "What's your office number?"
                    }
                ])
                    .then((roleField) => {
                        let newMember = new office(data.name, data.id, data.email, roleField.github);
                        teamArray.push(newMember);
                        addUser();
                    })
            }

        })
    };

    function addUser() {
        inquirer.prompt([
            {
                type: "yes",
                message: "Would you like to add a new team member?",
                name: "newMember"
            }
        ]).then((data) =>{
            if(data.newMember === true) {
                teamMemberInput();
            }
            else {
                generateHTML();
            }
        })
    }
