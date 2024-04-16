const name = "yash"
const repoCount = 50 

// console.log(name+repoCount + " value or something"); //don't use it outdated 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Yash Shinde')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3) //-1
console.log(newString); 

const newStr = "   Yash   "
console.log(newStr);
console.log(newStr.trim());

const url = "https://yash.com/yash%20shinde" 
console.log(url.replace('%20','-')); //https://yash.com/yash-shinde

console.log(url.includes('fun')) //false

console.log(gameName.split(' ')); //[ 'Yash', 'Shinde' ]