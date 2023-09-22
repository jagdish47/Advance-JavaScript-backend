class Product {
  #name; //private-> cannot be accessible outside the class
  #price;
  // description;

  constructor(n, p, d) {
    //if you write this here than (this) point to new brand new object which is creaeted using new keyword.
    this.#name = n;
    this.#price = p;
    this.description = d;
    // return "10" //if your returning primitive value than there is no effect. it just avoid it -> constuctor made to do with object
    // return {}; //if your returning object than it will be return
    //return this //if you dont return anything it is equl to saying (return this)
  }

  // setName(n) {
  //   if (typeof n !== "string") {
  //     console.log("Invalid name Passed");
  //     return;
  //   }
  //   this.#name = n;
  // }

  setPrice(p) {
    if (p > this.#price) {
      console.log("You don't have sufficient balance");
      return;
    }
    this.#price -= p;
  }

  // getNmae() {
  //   return this.#name;
  // }

  getPrice() {
    return this.#price;
  }

  //JavaScript provide a better way for getter and setter method

  set name(n) {
    if (typeof n !== "string") {
      console.log("Invalid name Passed");
      return;
    }
    this.#name = n;
  }

  get name() {
    return this.#name;
  }

  display() {
    //print the product
    // console.log(this);
    console.log(this.#name, this.price, this.description);
  }
}

const p = new Product("Bag", 1000, "a cool bag");
console.log(p);
p.setName("Jaggi");
console.log(p);

/**
 * new keyword -> create a brand new plan Javascript object
 * when you write a name of class() with parenthesis it calls the consturtor of class
 * whenever you create a object of class consturctor is first function which is called
 * If you dont write than JS will write default constructor for you
 * In javascript consturtor wirtten in construtor in c++ and Java we have to write class name to create
 * there is no constructor overloading in Javascript because it have only one constructor that's it
 *
 *
 * why ?
 * if you want to initialize
 * setup some connection
 * all that logic put into constructor
 *
 */

/**
 * Access Modifiers
 *
 * {PRIVATE}
 *
 * for private(#)
 * whenever you use in class you have to use #
 */
