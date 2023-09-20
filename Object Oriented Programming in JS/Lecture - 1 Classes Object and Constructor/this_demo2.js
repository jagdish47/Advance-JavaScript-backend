let Products = {
  arr: [
    {
      name: "Iphone 13 Pro",
      price: 100000,
      descrption: "The new apple iPhone 13 Pro",
      rating: 4.8,
      getCategory: function print() {
        console.log(this.category);
      },
    },
    {
      name: "Macbook 13 Pro",
      price: 125000,
      descrption: "The new apple macbook 13 Pro",
      rating: 4.9,
      getCategory: function print() {
        console.log(this.category);
      },
    },
  ],
  category: "Electronic",
};

console.log(Products.arr[0].getCategory());
