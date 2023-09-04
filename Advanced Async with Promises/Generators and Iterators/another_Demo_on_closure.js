function process() {
  let i = 0;
  let j = [1, 2, 3];
  let k = 10;
  /**
   * only those will went into clouser, which are used inside the innerProcess(), Like i and j will be inside [[scope]] of clouser
   */
  function innerProcess() {
    i += 1;
    console.log(j);
    return i;
  }
  return innerProcess; //we are not calling the function, we are just returning
}
