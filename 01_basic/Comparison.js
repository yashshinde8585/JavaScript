/** The resone is that an equality check == and comparisons > <>=
   <= work differently 
 * Comparisons convert null to a number. treating it as 0. 
 */

console.log(null > 0); //false
console.log(null == 0); //false 
console.log(null >= 0); //true 


// ===
console.log("2" === 2); //false 