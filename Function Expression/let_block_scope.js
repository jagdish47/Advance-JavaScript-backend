var teacher = "sanket"; //global (FUNCTION SCOPE)
let teacher = "Hey"; //it will be accessible below only(BLOCK SCOPE)

function fun() {
  //global
  var teacher = "pulkit"; //scope of fun no erorro will be given //you can access it above as well inside function only
  let content = "JS"; //content will be access inly post declaration

  if (content == "JS") {
    console.log(hours); //you can not access it(it's called Temporal Dead Zone) you can not aceess without Initialization
    let hours = "120+"; //it's also a block you can not access hours outside the scope
    console.log(hours);
  }

  console.log(teacher, content);
}

fun();
console.log(teacher);
console.log(content);
