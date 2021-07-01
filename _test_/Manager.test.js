//grab the file that holds the logic 
const Manager = require("../lib/Manager");


//create test to set the officeNumber 
test("set Office Number ", ()=> {
   const testVaule = 100;
   const example = new Manager("Name", 2, "test@test.com",testVaule);
   expect(example.officeNumber).toBe(testVaule);
});

//createa test for getRole 
test("grab the role ", ()=> {
    const testVaule = 'Manager';
                                 //("Name", id, "email", officeNumber)
    const example = new Manager("Name", 2, "test@test.com", 100);
    expect(example.getRole()).toBe(testVaule);
 });
  
//create a t est to test your getOffice method (grabbign the number and testing the method)
test("grab the office number ", ()=> {
    const testVaule = 100;
                               //("Name", id, "email", officeNumber)
    const example = new Manager("Name", 2, "test@test.com",testVaule);
    expect(example.getOfficeNumber()).toBe(testVaule);
 });