const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

const AllHeros= marvel_heros.concat(dc_heros);
// console.log(AllHeros);

const all_newHeros = [...marvel_heros,...dc_heros]
// console.log(all_newHeros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArr = anotherArr.flat(Infinity)
// console.log(real_anotherArr);

console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"))
console.log(Array.from({name:"Yash"})) //interesting 

let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3));

