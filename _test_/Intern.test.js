//grab the file that holds the logic 
const Intern = require("../lib/Intern");


//create test to set the Github 
test("set school ", ()=> {
   const testVaule = 'Intern';
   const example = new Intern("Name", 2, "test@test.com",testVaule);
   expect(example.school).toBe(testVaule);
});

//createa test for getRole 
test("grab the role ", ()=> {
    const testVaule = 'Intern';
                                 //("Name", id, "email", officeNumber)
    const example = new Intern("Name", 2, "test@test.com", 100);
    expect(example.getRole()).toBe(testVaule);
 });
  
//create a t est to test your getOffice method (grabbign the number and testing the method)
test("grab the school ", ()=> {
    const testVaule = 100;
                               //("Name", id, "email", officeNumber)
    const example = new Intern("Name", 2, "test@test.com",testVaule);
    expect(example.getSchool()).toBe(testVaule);
 });