function sayMayName() {
    console.log("Hello");
    console.log("i am Yash");
}
// sayMayName()

// function addTwoNum(n1,n2){
//     console.log(n1 + n2); 
// }
// addTwoNum(12,33);

function addTwoNum(n1, n2) {
    // let result = n1+n2
    // return result
    return n1 + n2;
}
const result = addTwoNum(12, 12);
// console.log("result:",result);

function loginUserMes(username) {

    return `${username} just logged in`
}
// console.log(loginUserMes()) //undefined just logged in
// console.log(loginUserMes("")) //just logged in
// console.log(loginUserMes("Hello")) //Hello just logged in

function loginUserMes(username) {
    // if(username === undefined){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMes()) //please enter a username
// console.log(loginUserMes("Hey!")) //Hey! just logged in

function loginUserMes(username = "hi") {
    // if(username === undefined){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMes()) //hi just logged in
console.log(loginUserMes("Hey!")) //Hey! just logged in
