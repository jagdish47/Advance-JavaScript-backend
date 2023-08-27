// if you define something in globla scope means it is accessible to everywhere

let name = "Jagdish"; //one of the way to make variable global//declare it outside the function and everything and it become global varibale

function fun() {
  console.log(name);
}

fun();
console.log(name);

// var declare a function scoped or globally variable, there is no block scope
//no block scoping in var
//var declarations, whenever they occur, are processed vefore any code is executed.

// let declaration declares a block-scoped variable, optionally initialize a value
