
let myName = "Yash" 
let anotherName = myName // create "myName" copy in stack
anotherName = "Om" 
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "yash@gmail.com",
    upi: "user@bi"
}
console.log(userOne);

let userTwo = userOne // reference 
userTwo.email = "syash0298@gmail.com"; 
console.log(userOne.email); 
console.log(userTwo.email);