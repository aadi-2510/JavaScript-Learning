// push , concat , spread  , flat ,isarray

// Adding 2 arrays via push method  *not a good practice
const bolly_heros = ["ranbir kapoor" , 37 , "Rockstar"];
const holly_heros = ["hugh jackman" , 56 , "X-men" ];

bolly_heros.push(holly_heros);
console.log(bolly_heros);

// Adding arrays via concat method  *not an industry approach
const allHeros = bolly_heros.concat(holly_heros);
console.log(allHeros);


/*Adding 2 or more array via spread operator its not a method of array  *good approach */

//Example 1
const allHeros2 = [...bolly_heros , ...holly_heros];
console.log(allHeros);

//Example 2
let numbers1 = [123 , 345 , 567];
let numbers2 = [789, 786, 987];
const allNumbers = [...numbers1 , ...numbers2];
console.log(allNumbers);


// Flat method for resolving nested arrays inside arrays
let nestedArray = [1,2,3, [4,5,5 , [56 ,45 ,4]]];
console.log(nestedArray.flat(1));
console.log(nestedArray.flat(Infinity));


// Important Method used while data scraping and converting files in array 
// isarray , from , of

