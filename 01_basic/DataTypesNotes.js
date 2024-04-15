/**Javascript is dynamic or static? => "Dynamically-typed" languages are those (like JavaScript) 
   where the interpreter assigns variables a type at runtime based on the variable's value at the time 
 */

// Primitive data types : there are 7 types => String, Numbers, Boolean, null, undefined, Symbol, BigInt 

// Reference types(Non Primitive): => Array, Objects, Functions 

const id = Symbol('18')
const anotherId = Symbol('18')
console.log(id === anotherId) 

const bigNumber = 999888777666n
console.log(typeof(bigNumber));

// array 
const heros = ["srk","doga","naagraj"];

// object 
let myObj = {
    name: "Yash",
    age: 21
}

// function 
const myFunctions = function(){
    console.log("Hello world");
}

console.log(typeof heros); //object 
console.log(typeof myObj); //object
console.log(typeof myFunctions); //function objects 