function* fetchNextElement() {
  //it's a generator function -> funtion*
  const x = 10; //define x = 10 //once it come back it will remeber this because of closure
  yield 11; //your thrown back with value 11

  console.log("entering after a yeild"); // (2nd) this will print

  const y = x + (yield 30); // create a variable y

  /**
   * const y = x + -> so now y is undefined
   * and (yield) stope here and go back where we have called with value 30
   *
   * (yield 30) is a part of expression as we again called than yield will get value of 13
   *
   * 10 + 13
   */

  console.log("Value of y is : ", y); //(4th) -> Value of y is : 23 //if you dont pass in yield next call than it will value of y is : NaN
}

const iter = fetchNextElement(); //-> here iter will create a empty object {}

console.log("First : ", iter.next()); //going inside the fuction ->(1) First : 11
console.log("second : ", iter.next()); // (3rd) -> second : 30
console.log("Third : ", iter.next()); //Now again we are going back where we have stop before //if you don't pass 13 than it will pass undefined
