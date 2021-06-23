const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer')


const question = [{
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
}]

// function writeToFile(fileName,data){

//     fs.writeFile(fileName, data, function(err) {
//         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err);
//         } else {
//             console.log ("Successfully wrote:" + fileName);
//         }
//         })
//     }
    
//     function init() {
//         inquirer.prompt(questions)
//         .then(function(data) {
//             writeToFile('test.md', generateMarkdown(data));
//             console.log(data.License)
//         })
//     }
    
    
//     // Function call to initialize app
//     init();
    
    
    