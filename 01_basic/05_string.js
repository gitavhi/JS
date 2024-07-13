const name = "name"
const repo = 20

//console.log( name + repo + "value");(OLD/OUTDATED)

//console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String("Avishek")
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,6)
console.log(newString);

const theString = gameName.slice(-8,7)
console.log(theString);


let newyork = "    city"
console.log(newyork);
console.log(newyork.trim());


let url = "https//avishek%20devkota%20youtube"
console.log(url.replace("%20","-"));