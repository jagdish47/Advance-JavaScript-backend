const f = function fun() {
  console.log("How much fun???");
};

f();
fun();

// function expression get the scope of coreposnding
// it jsut tight boundation of f
// you cannot call function using fun();
// fun is only accesible via f
