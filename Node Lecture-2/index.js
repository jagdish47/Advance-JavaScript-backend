const searchFunctions = require("./linearSearch"); //you can destructure it
// const { linearSearch, binarySearch } = require("./linearSearch"); //Name import -> different way to export export in object
const bubbleSort = require("./bubbleSort"); //default export -> different way to export

// const { linearSearch, binarySearch } = require("./linearSearch"); //you can destructure it like this

console.log(searchFunctions);

let arr = [4, 54, 5, 534, 2, 4234, 4234, 4, 234, 23, 4];
let x = 60;

bubbleSort(arr);

console.log(arr);

console.log(searchFunctions.linearSearch(arr, x));
