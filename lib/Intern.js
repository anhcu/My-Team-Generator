// const Employee = require('./Employee');
// class Employee {
//     constructor(name, id, email)
//     {
//     this.name = name;
//     this.id = id;
//     this.email =email;
//     }
//     getName(){
//         return this.name;
//     };
//     getId(){
//         return this.id;
//     };
//     getEmail(){
//         return this.email;
//     };
//     getRole(){
//         return "Employee";
//     };
// }


const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
    }
    getSchool(){
        return this.school
    };
    getRole(){
        return "Intern"
    };
}

module.exports = Intern

// class Engineer extends Employee {
//     constructor(name, id, email, github){
//         super(name,id,email);
//         this.github = github;
//     }
//     getGithub(){
//         return this.github
//     };
//     getRole(){
//         return "Engineer"
//     };
// }

// module.exports = Engineer

// class Manager extends Employee {
//     constructor(name, id, email, officeNumber){
//         super(name,id,email);
//         this.officeNumber = officeNumber;
//     }
//     officeNumber(){
//         return this.officeNumber
//     };
//     getRole(){
//         return "Manager"
//     };
// }

// module.exports = Manager

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`