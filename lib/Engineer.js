const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }
    getGithub(){
        return this.github
        console.log(github)
    };
    getRole(){
        return "Engineer"
    };
}

module.exports = Engineer
