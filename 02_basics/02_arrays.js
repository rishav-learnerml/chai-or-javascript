const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); //[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] --> array of arrays, as array can take any value, modifies original array

// const newheroes = marvel_heroes.concat(dc_heroes);
// console.log(newheroes); // same as push --> returns a new array but doesnot not modifies

//spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const another_real_array = another_array.flat(Infinity); //converts into a single Array;
console.log(another_real_array);

console.log(Array.isArray("Rishav")); //false
console.log(Array.from("Rishav")); //[ 'R', 'i', 's', 'h', 'a', 'v' ]
console.log(Array.from({ name: "Rishav" })); // empty array[] as whole object can't be converted
//mention if you need array of keys or array of values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //return new array from set of elements
