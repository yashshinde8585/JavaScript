//array

/** Javascript vs Java 
 *  array in Javascript can have various values.
 *                  vs
 *  In Java, it can only use the same values 
 */

// let info = ["krushna",21,8.44] //mixed array
// console.log(info);
// console.log(typeof info); //object 

// array methods 

let names = ["krushna","Yash","Chandu"];
console.log(names);

// 1 push : add to end 
names.push("Vishal");
console.log(names); //[ 'krushna', 'Yash', 'Chandu', 'Vishal' ]

// 2 pop : delete from ends & returns it.
names.pop();
console.log(names); //[ 'krushna', 'Yash', 'Chandu' ]

// 3 unshift: add to start 
names.unshift("Vishal");
console.log(names); //[ 'Vishal', 'krushna', 'Yash', 'Chandu' ]

//4 shift : delete from start and return it. 
let s = names.shift();
console.log(s); //[ 'Vishal', 'krushna', 'Yash', 'Chandu' ]
                //Vishal

let followers = ["K","Y","C"];
let blocked = followers.shift();
console.log(followers);  //[ 'Y', 'C' ]
console.log(blocked);  //K
 
// indexOf: returns index of something 

let primary = ["red","yellow","blue"];
console.log(primary);
let ret = primary.indexOf("yellow") //1
let ret1 = primary.indexOf("Yellow") //-1 (not present in array case sensitive)
let ret2 = primary.indexOf("blue") //2
let ret3 = primary.indexOf("red") //0
console.log(ret3); 

// let search = primary.includes("red") //true
let search = primary.includes("green") //false
console.log(search);