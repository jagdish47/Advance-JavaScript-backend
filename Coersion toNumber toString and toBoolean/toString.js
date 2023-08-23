// undefined -> "undefined"
// Null -> "Null"
// Boolean true -> "true"
//         false -> "false"

//Symbol -> TypeError
//String -> String
//Number -> return NumberToString(arg)

//Object -> Prmitive Value ? ToPrimitive(argument)
//       -> Return ? ToString(PrimValue)

let obj = {};
console.log(obj.toString()); //[object, object]

let arr = [];
console.log(arr.toString()); //empty

let arr1 = [1, 2, 3];
console.log(arr1.toString()); //1,2,3

console.log(true.toString()); //true
console.log(false.toString()); //false

let a = undefined;
console.log(a.toString());
