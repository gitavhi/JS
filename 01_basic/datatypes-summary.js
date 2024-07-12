/*Two types of data types
1.premitive
2.non premetive
(divided in the basis of how they
store data and acess the stored data)

- PREMITIVE ( 7 types)
string,number,boolearn,null,undefined,
symbol(used to make any values unique),
BigInt
*/
const score = 100 //number
const useraIsLoggedIn = true //boolearn
const outsideTemp = null //null
let userEmail ; //undefined

/*

- REFERNCE TYPE(NON PRIMITIVE)
array,objects,functions.

*/
const heros = ["shaktiman","nagraj","rajeshhamal"]
// array

 /* let myObj = {
    name:"avi",
    age:22,
} 
// example of object
*/ 

const myFunction = function (){
    console.log("hello world");
}
/*
######## finding the data types using (typeof) 
______________________________________________________________________________________________________
Type of val	                                              Result  
_____________________________________________________________________________________________________
1 - Undefined	---------------------------------------> "undefined"
2 - Null	-------------------------------------------> "object"
3 - Boolean -------------------------------------------->  "boolean"
4 - Number --------------------------------------------->   "number"
5 - String	------------------------------------------->   "string"
6 - Object (native and does 
   not implement [[Call]])	--------------------------->   "object"
7 - Object (native or host and 
 does implement [[Call]])	---------------------------> "function"
8 - Object (host and does not implement [[Call]]) ------>  Implementation-defined except may not be 
                                                           "undefined", "boolean", "number", or "string".
 
_____________________________________________________________________________________________________________
*/  
// using above function to find data type
let number = "1000"
console.log( number );
console.log(typeof number); 


//-------------------------------------------------------------------------------------------------------------

/*   MEMORY (TWO TYPES)
1.stack( use primitive)              2.Heap(use in non primitive)
   -copy(dont change org value_)      -original(if we update org value update)
   */

let myName = "dialogona"
let myAnotherName = myName
myAnotherName = "dhiraj"
console.log(myName);
console.log(myAnotherName);

let oneUser = {
    email :"email@gmail.com",
    upi:"9885",
}
oneUser.upi ="meroUpiNumber"
console.log(oneUser);
