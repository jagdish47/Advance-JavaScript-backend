// const x = 10;
// x = 20;
// console.log(x);
//constant have block scope as let. but constant we cann't change the value once assign value

const obj = {
  x: 10,
};
obj.y = 20;
console.log(obj.x);
console.log(obj.y);

//Reassignment is stops but you can add new value in object and array
// In Object using const we can add new property and change the value as well
//but with object contatant can be change

console.log(a);
const a = 100;
//Yes, Temporal Dead Zone is also availalbe in Const

// const gh;
// Uninitialize Constant also not allow it give you error as well
