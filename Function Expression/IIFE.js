// IIFE = Immediately Invoke Function Expression

//FE = Function expression -> whenever we declare function witout funciton keyword it is know as function expression

//whenever your creating a IIFE you must have to Immediately Invoke it and it must be a Function Expression

(function x(y) {
  console.log("Hey", y);
})("Jagdish");

//Now this is an IIFE because you had Immediately called it

(function () {
  console.log("LOL");
})();

//it must be inside () Bracket than it will work
