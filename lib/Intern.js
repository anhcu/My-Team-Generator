const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, school){
        super(name,id,email,);
        this.school = school;
    }
    getGithub(){
        return this.school
    };
    getRole(){
        return "Engineer"
    };
}

module.exports = Intern


// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`