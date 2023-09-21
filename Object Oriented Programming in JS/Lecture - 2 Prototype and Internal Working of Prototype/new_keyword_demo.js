class Product {
  name;
  price;
  description;

  constructor(n, p, d) {
    //if you write this here than (this) point to new brand new object which is creaeted using new keyword.
    this.name = n;
    this.price = p;
    this.description = d;
    // return "10" //if your returning primitive value than there is no effect. it just avoid it -> constuctor made to do with object
    // return {}; //if your returning object than it will be return
    //return this //if you dont return anything it is equl to saying (return this)
  }

  display() {
    //print the product
  }
}

const p = new Product("Bag", 1000, "a cool bag");
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
