//grab the file that holds the logic 
const Engineer = require("../lib/Engineer");


//create test to set the Github 
test("set Github ", ()=> {
   const testVaule = 'Engineer';
   const example = new Engineer("Name", 2, "test@test.com",testVaule);
   expect(example.github).toBe(testVaule);
});

//createa test for getRole 
test("grab the role ", ()=> {
    const testVaule = 'Engineer';
                                 //("Name", id, "email", officeNumber)
    const example = new Engineer("Name", 2, "test@test.com", 100);
    expect(example.getRole()).toBe(testVaule);
 });

//create a t est to test your getOffice method (grabbign the number and testing the method)
test("grab the engineer info", ()=> {
    const testVaule = 100;
                               //("Name", id, "email", officeNumber)
    const example = new Engineer("Name", 2, "test@test.com",testVaule);
    expect(example.getGithub()).toBe(testVaule);
 });