function Hello() {
    //function defination
    console.log("Helllo i am Yash");
  }
  Hello(); //function calling
  
  function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
  }
  rollDice();
  
  //function with arguments:
  
  function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
  }
  printInfo("Yash", 21);
  
  // return
  
  function sumOf(n1, n2) {
    return n1 + n2;
  }
  console.log(sumOf(21, 4));
  
  //create a fun that returns the concatention of all string in an array
  let str = ["Hey", "Hello", "Hi"];
  function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += str[i];
    }
    return result;
  }
  console.log(concat(str));
  
  