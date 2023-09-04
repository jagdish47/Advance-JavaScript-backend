function* fetchNextElement() {
  console.log("I am Inside the generator function");
  yield 1;
  yield 2; //If your calling second time but we are not doing anything it wont do anything just call.
  console.log("Somewhere in the middle");
  yield 3;
  return 100; //If you put return keyword than nothing will be considered below this
  yield 4;
  console.log("The end");
}

// fetchNextElement(); ////If you call generators directly you cannot able to call the function of generators

const itr = fetchNextElement();
itr.next();
itr.next();
itr.next();
itr.next();
itr.next();
itr.next();

/**
 * They are defined using the function* syntax and include one or more yield statements to specify points at which the function should yield control
 * back to the caller. Generators are particularly useful for working with asynchronous code and handling sequences of data.
 */
