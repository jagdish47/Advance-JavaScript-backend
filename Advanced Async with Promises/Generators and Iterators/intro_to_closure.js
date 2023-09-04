function process() {
  //Process is alredy done before the innerProcess() we are  going to start, So Innerfunction will remember the scope of outer function even outer function is already done
  let i = 0;
  function innerProcess() {
    i += 1; //this i is coming from process() scope, it will check in clouser is i availabe inside clouser
    return i;
  }

  return innerProcess; //we are not calling the function, we are just returning, it feels like we are returning only innerProcess()
  /**
   * the function innerfunction inside there is prototype chain inside there is a property called [[scope]] Inside scope
   * there is term called Clouser which remember the scope of outer function and innerfunction as well (remeber memory location), this is editable/updatable
   * memory location.
   *
   * it called clouser because it closing over value, it symbol to remebering the scope of variable, it's same varibale inside scope or innerprocess the innerprocess
   * remeber the varibale(clouser means remebering the value)
   */
}

let res = process(); //this line calls the function, which returns another function

console.log(res()); //1
console.log(res()); //2
console.log(res()); //3
