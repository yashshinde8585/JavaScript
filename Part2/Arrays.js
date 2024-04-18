const myArr = [0,1,2,3,4,5]
const myHeors = ["Papa","uncle","Brother"]

const myArr2  = new Array(1,2,3,4,5)
console.log(myArr[1]);

//array methods 

// myArr.push(18);
// myArr.push(8); //adding new element in array
// myArr.pop() //removing the last element of array

myArr.unshift(9) //Inserts new elements at the start of an array, and returns the new length of the array.

myArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArr.includes(3)); //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(myArr.indexOf(3)); 

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

//**slice, splice "Slice creates a new sub-array, splice modifies the original array by adding/removing elements."

console.log("A",myArr); // [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr) // [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr) // [ 0, 4, 5 ]