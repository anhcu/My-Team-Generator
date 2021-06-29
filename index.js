const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "_test_");
const render = require("./lib/renderer");


let teamMembers = [];

const firstQuestion = {
  type: "list",
  message: "Would you like to add a member or generate current team?",
  name: "Add",
  choices: ["Add Member", "Generate Team"],
};
const questionsYourRole = {
  type: "list",
  message: "What member you want to add?",
  name: "role",
  choices: ["Intern", "Engineer", "Manager"],
};

const fileNameQuestion = {
  type: "input",
  message: "Please enter valid file name",
  name: "fileName",
};

const Questions = {
  Manager: [
    {
      type: "input",
      message: "Please enter your name",
      name: "name",
    },
    {
      type: "input",
      message: "What is your id Number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber",
    },
  ],
  Engineer: [
    {
      type: "input",
      message: "Your name",
      name: "name",
    },
    {
      type: "input",
      message: "What is your id Number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Github userName?",
      name: "githubUserName",
    },
  ],
  Intern: [
    {
      type: "input",
      message: "Please enter your name",
      name: "name",
    },
    {
      type: "input",
      message: "What is your id Number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your school?",
      name: "school",
    },
  ],
};


const startApp = () => {
  selectRole();
};

const addOrFinish = () => {
  inquirer.prompt(firstQuestion).then((answer) => {
    if (answer.Add === "Add Member") {
      selectRole();
    } else {
      getFileName();
    }
  });
};

const selectRole = () => {
  inquirer.prompt(questionsYourRole).then((answer) => {
    console.log(answer);
    roleQuestions(Questions[answer.role], answer.role);
  });
};
const roleQuestions = (questions, role) => {
  inquirer.prompt(questions).then((answer) => {
    //console.log(answer);
    let member = {};
    if (role === "Manager") {
      member = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
    } else if (role === "Engineer") {
      member = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.gitHubUserName
      );
    } else if (role === "Intern") {
      member = new Intern(answer.name, answer.id, answer.email, answer.school);
    }
    teamMembers.push(member);
    addOrFinish();
  });
};
console.log(teamMembers);

const getFileName = () => {
  inquirer.prompt(fileNameQuestion).then((answer) => {
    if (answer.fileName) {
      generateTeam(answer.fileName);
    } else {
      getFileName();
    }
  });
};

const generateTeam = (fileName) => {
  const outputPath = path.join(OUTPUT_DIR, fileName + ".html2");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  fs.writeFileSync(outputPath, render(teamMembers), (err) => {
    if (err) {
      console.log(err);
      getFileName();
    }
  });
};






startApp();



// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer.js');
// const Manager = require('./lib/Manager.js');
// const http = require('http');
// // const { Script } = require('vm');
// const inquirer = require('inquirer');


// const fs = require('fs');
// const port = 8080



// const server = http.createServer(function(req,res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.readFile('index.html', function(error, data) {
//         if (error) {
//             res.writeHead(404)
//             res.write("Error: File Not Found")
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// })



// const teamArray = [
//     {
//     name : "Engineer", id : 1, email : 'test1@email.com'
// },
// {
//     name : "Intern", id : 2, email : 'test2@email.com'
// },
// {
//     name : "Manager", id : 3, email : 'test3@email.com'
// }

// ];


// const questions = [
//     {
//         type: "input",
//         message: "What is your name?",
//         name:"name"
//     },{
//         type: "input",
//         message: "What is your ID number?",
//         name:"id"
//     },{
//         type: "input",
//         message: "What is your email?",
//         name:"email"
//     },{
//         type: "checkbox",
//         message: "What is your role?(Use spacebar to select)",
//         name:"role",
//         choices: ['Engineer', 'Intern', 'Manager']
//     }
// ]

// //function to write REAMME file
// function writeToFile(fileName,data){

//     if(data){
//         this.LoadTabs()
//     }
// }

// function LoadTabs(){
//     this.teamArray.forEach(tab => {
//         const cardDiv = document.getElementById('card')
//         const titleDiv = document.createElement('div')
//         titleDiv.id = tab.id;
//         titleDiv.classList.add('title')

//         const labelTitle = document.createElement('h5')
//         labelTitle.classList.add('card-title')
//         labelTitle.innerText=tab.name
        
//         const lableRole = document.createElement('h5')
//         lableRole.id = 'role' + tab.id
//         lableRole.classList.add("card-title")
//         lableRole.innerText= tab.role + " Name"
       
//         titleDiv.append(labelTitle)
//         titleDiv.append(lableRole)
//         cardDiv.append(titleDiv)

//         const bodyDiv = document.createElement('div')
//         bodyDiv.id = tab.id;
//         bodyDiv.classList.add('card-body')

//         const labelID = document.createElement('p')
//         labelID.classList.add('card-text')
//         labelID.innerText= "ID:" + tab.id
        
//         const labelEmail = document.createElement('p')
//         labelEmail.classList.add('card-text')
//         labelEmail.innerText= "Email:" + tab.email

//         const labelOffice = document.createElement('p')
//         labelOffice.classList.add('card-text')
//         labelOffice.innerText= "Office Number:" + tab.officeNumber
       
//         bodyDiv.append(labelID)
//         bodyDiv.append(labelEmail)
//         bodyDiv.append(labelOffice)
//         cardDiv.append(bodyDiv)
//       })
// }

// function addUser() {
//     inquirer.prompt([
//         {
//             type: "yes",
//             message: "Would you like to add a new team member?",
//             name: "newMember"
//         }
//     ]).then((data) =>{
//         if(data.newMember === true) {
//             teamMemberInput();
//         }
//         else {
//             generateHTML();
//         }
//     })
// }

// function generateMarkdown(data) {
//     if (data.role[0] === "Engineer") {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "Github",
//                 message: "Enter Github username:"
//             }
//         ])
//             .then((roleField) => {
//                 let newMember = new Engineer(data.name, data.id, data.email, roleField);
//                 teamArray.push(newMember);
//                 addUser();
//             })
//     }
//     else if (data.role[0] === "Intern") {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "school",
//                 message: "What school you're attending"
//             }
//         ])
//             .then((roleField) => {
//                 let newMember = new Intern(data.name, data.id, data.email, roleField);
//                 teamArray.push(newMember);
//                 addUser();
//             })
//     }
//     else {
//         inquirer.prompt(
//             {
//                 type: "input",
//                 name: "office",
//                 message: "What's your office number?"
//             }
//         )
//             .then(function(roleField) {
//                 console.log(roleField)
//                 // let newMember = new Manager(data.name, data.id, data.email, roleField);
//                 // teamArray.push(newMember);
//                 // addUser();
//                 return addMoreTeamMember(data)
//             })
//     }
// };


// function addMoreTeamMember(data) {
//     inquirer.prompt(
//         {
//             type: "input",
//             name: "office",
//             message: "Continue",
//             choices: ['Yes', 'No']
//         }
//     )
//         .then(function(conitnue) {
//             console.log(conitnue)
//             if(conitnue == 'Yes' || conitnue == "yes"){
//                 this.generateMarkdown(data)
//             }else{
//                 return true;
//             }
//         })
// }
      

// function init() {
//     inquirer.prompt(questions)
//     .then(function(data) {
//         writeToFile('test.md', generateMarkdown(data));
//     })
// }




// const handleRequest = (request, response) => {
//     // Send the below string to the client when the user visits the PORT URL
//     response.end(`It Works!! Path Hit: ${request.url}`);
//   };
  
//   // Use the Node HTTP package to create our server.
//   // Pass the handleRequest function to empower it with functionality.
// //   const server = http.createServer(handleRequest);---------------------
  
// //   // Start our server so that it can begin listening to client requests.
// //   server.listen(PORT, () => {
// //     // Log (server-side) when our server has started
// //     console.log(`Server listening on: http://localhost:${PORT}`);
// //   });
  


// init();
