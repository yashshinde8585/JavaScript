const accountId = 858585
let accountEmail = "yashshinde8585@gmial.com"
var accountPass = "12345"
/*
Prefer not to use "var"
because of issue in block scope and functional scope 
*/
accountCity = "Pune"
let accountState; //undefined 

// accountId = 18 //Assignment to constant variable.(not allowed)

accountEmail = "syash0298@gmail.com"
accountPass = "yash123"
accountCity = "Nashik"
console.log(accountId);

console.table([accountId, accountEmail, accountCity, accountPass,accountState])