// primitive types converting non primitive types automatically
// literal : we write in convension whose value is obvious like 1 is literal
console.log((1).toString());
console.log(Number(1).toString()); //Number is an Object here

// NOTE - Read About Boxing
// https://javascript.plainenglish.io/javascript-boxing-wrappers-5b5ff9e5f6ab

let x = 10;
console.log(x.toString());
console.log((10).toString());

console.log(typeof x); //type of x is still number because we dont intent to change the original type
