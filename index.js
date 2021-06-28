const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const http = require('http');
const { Script } = require('vm');
const inquirer = require('inquirer');

// const { createDecipher } = require('crypto');
// const port = 8080;



const teamArray = [
    {
    name : "Engineer", id : 1, email : 'test1@email.com'
},
{
    name : "Intern", id : 2, email : 'test2@email.com'
},
{
    name : "Manager", id : 3, email : 'test3@email.com'
}

];


const questions = [
    {
        type: "input",
        message: "What is your name?",
        name:"name"
    },{
        type: "input",
        message: "What is your ID number?",
        name:"id"
    },{
        type: "input",
        message: "What is your email?",
        name:"email"
    },{
        type: "checkbox",
        message: "What is your role?(Use spacebar to select)",
        name:"role",
        choices: ['Engineer', 'Intern', 'Manager']
    }
]








{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}






//function to write REAMME file
function writeToFile(fileName,data){

    if(data){
        this.LoadTabs()
    }
}

function LoadTabs(){
    this.teamArray.forEach(tab => {
        const cardDiv = document.getElementById('card')
        const titleDiv = document.createElement('div')
        titleDiv.id = tab.id;
        titleDiv.classList.add('title')

        const labelTitle = document.createElement('h5')
        labelTitle.classList.add('card-title')
        labelTitle.innerText=tab.name
        
        const lableRole = document.createElement('h5')
        lableRole.id = 'role' + tab.id
        lableRole.classList.add("card-title")
        lableRole.innerText= tab.role + " Name"
       
        titleDiv.append(labelTitle)
        titleDiv.append(lableRole)
        cardDiv.append(titleDiv)

        const bodyDiv = document.createElement('div')
        bodyDiv.id = tab.id;
        bodyDiv.classList.add('card-body')

        const labelID = document.createElement('p')
        labelID.classList.add('card-text')
        labelID.innerText= "ID:" + tab.id
        
        const labelEmail = document.createElement('p')
        labelEmail.classList.add('card-text')
        labelEmail.innerText= "Email:" + tab.email

        const labelOffice = document.createElement('p')
        labelOffice.classList.add('card-text')
        labelOffice.innerText= "Office Number:" + tab.officeNumber
       
        bodyDiv.append(labelID)
        bodyDiv.append(labelEmail)
        bodyDiv.append(labelOffice)
        cardDiv.append(bodyDiv)
      })
}

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

function generateMarkdown(data) {
    if (data.role[0] === "Engineer") {
        inquirer.prompt([
            {
                type: "input",
                name: "Github",
                message: "Enter Github username:"
            }
        ])
            .then((roleField) => {
                let newMember = new Engineer(data.name, data.id, data.email, roleField);
                teamArray.push(newMember);
                addUser();
            })
    }
    else if (data.role[0] === "Intern") {
        inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: "What school you're attending"
            }
        ])
            .then((roleField) => {
                let newMember = new Intern(data.name, data.id, data.email, roleField);
                teamArray.push(newMember);
                addUser();
            })
    }
    else {
        inquirer.prompt(
            {
                type: "input",
                name: "office",
                message: "What's your office number?"
            }
        )
            .then(function(roleField) {
                console.log(roleField)
                // let newMember = new Manager(data.name, data.id, data.email, roleField);
                // teamArray.push(newMember);
                // addUser();
                return addMoreTeamMember(data)
            })
    }
};


function addMoreTeamMember(data) {
    inquirer.prompt(
        {
            type: "input",
            name: "office",
            message: "Continue",
            choices: ['Yes', 'No']
        }
    )
        .then(function(conitnue) {
            console.log(conitnue)
            if(conitnue == 'Yes' || conitnue == "yes"){
                this.generateMarkdown(data)
            }else{
                return true;
            }
        })
}
      

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('test.md', generateMarkdown(data));
    })
}




const handleRequest = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It Works!! Path Hit: ${request.url}`);
  };
  
  // Use the Node HTTP package to create our server.
  // Pass the handleRequest function to empower it with functionality.
  const server = http.createServer(handleRequest);
  
//   // Start our server so that it can begin listening to client requests.
//   server.listen(PORT, () => {
//     // Log (server-side) when our server has started
//     console.log(`Server listening on: http://localhost:${PORT}`);
//   });
  


init();
