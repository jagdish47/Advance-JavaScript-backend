// Everytime we see formal declaration we thing about the scope in parsing phase

var teacher = "Jagdish";

function fun() {
  var teacher = "Manish";
  console.log(teacher);
}

function gun() {
  var student = "Lokesh";
  console.log(student);
}

fun(); //Manish
gun(); //Lokesh
console.log(teacher); //Lokesh

//Scope - visibility(visibility of variables and functions)
//Everything(varibale and function) inside your code, will be used in one ot the following 2 ways
//1-either it will be getting some value assigned to it
//2-Or some value will be retrived from it

//Do you think JavaScript is compilted ? Do you thing JS is interpreted ?
//Compile - Compiler will read your whole code once and show all the mistake like you have three mistake in code //c++, c
//Interpreter - it doesn't read the whole code it will run line by line if there is any error it will stop there //shell

// -JavaScript in not purely Interpreted
// -JavaScript is not completely compiled as well

//Every JS code execute in two phase first is Parsing Phase and second is Execution Phase

// Types of Scope
// 1.Global
// 2.function
// 3.Block
