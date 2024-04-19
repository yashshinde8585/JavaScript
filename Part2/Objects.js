//object literals : Syntax: const userName = {}

const mySym = Symbol("key1");

const jsUser = {
  email: "yash@gmail.com",
  name: "yash",
  "full Name": "Yash T Shinde",
  [mySym]: "myKey1",
  age: 21,
  isLogin: false,
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(jsUser[mySym]);
console.log(jsUser.isLogin);

let str = (jsUser.email = "syash@gmail.com");
console.log(str);

// Object.freeze(jsUser)
// jsUser.email  = "yashshinde@gmail.com";
// jsUser.name = "shinde";
// jsUser.age = 22;
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`User name is: ${this.name}, and user age is:${this.age}`);
};

jsUser.greeting();
jsUser.greetingTwo();
