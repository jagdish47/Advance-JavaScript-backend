function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.description = d;
  //return 10 -> it will avoid it
  //return this -> if you dont return anything
  //return this; -> if you return this and dont use new keyword than it will return global object
  //you can do anything whatever you can do with classes in javascript
}

const p = new Product("bag", 100, "cool new bag");
console.log(p);
