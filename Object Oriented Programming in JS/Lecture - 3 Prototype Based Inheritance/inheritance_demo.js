class Category {
  constructor(c) {
    this.categoryName = c;
  }
}

class Product extends Category {
  constructor(n, c) {
    super(c);
    this.name = n;
  }
}

const p = new Product("Iphone", "Mobiles");

console.log(p);
