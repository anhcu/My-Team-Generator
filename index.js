const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "_test_");
const render = require("./lib/renderer");


//This function will validate prompts needing a string
const validateString = string => {
  return string !== '' || 'This information is required.';
}

//Will validate if a number is entered in prompts needing a number
const validateNumber = number => {
  const reg = /^\d+$/;
  return reg.test(number) || "Please enter a number.";
}

//A function that will validate if an proper email is entered when prompted.
const validateEmail = email => {
  const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
  return reg.test(email) || "Please enter a valid email."

}

  


let teamMembers = [];

const firstQuestion = {
  type: "list",
  message: "Would you like to add a member or generate current team?",
  name: "Add",
  choices: ["Add Member", "Create Team"],
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
      validate: validateString,
    },
    {
      type: "input",
      message: "What is your id Number?",
      name: "id",
      validate: validateNumber,
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
      validate: validateEmail,
    },
    {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber",
      validate: validateNumber,
    },
  ],
  Engineer: [
    {
      type: "input",
      message: "Your name",
      name: "name",
      validate: validateString,
    },
    {
      type: "input",
      message: "What is your id Number?",
      name: "id",
      validate: validateNumber,
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
      validate: validateEmail,
    },
    {
      type: "input",
      message: "What is your Github userName?",
      name: "gitHubUserName",
      validate: validateString,
    },
  ],
  Intern: [
    {
      type: "input",
      message: "Please enter your name",
      name: "name",
      validate: validateString,
    },
    {
      type: "input",
      message: "What is your id Number?",
      name: "id",
      validate: validateNumber,
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
      validate: validateEmail,
    },
    {
      type: "input",
      message: "What is your school?",
      name: "school",
      validate: validateString,
    },
  ],
};


function init() {
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
  const outputPath = path.join(OUTPUT_DIR, fileName + ".html");

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

init();
