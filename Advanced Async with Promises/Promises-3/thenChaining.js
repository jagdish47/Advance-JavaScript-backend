Promise.resolve("foo")
  .then(function p1(string) {
    //returning a new promise
    new Promise((resolve, reject) => {
      setTimeout(() => {
        string += "bar"; //foobar
        resolve(string);
      }, 1000);
    });
  })

  .then(function p2(string) {
    setTimeout(() => {
      string += "baz";
      console.log(string); //foobarbaz
    });
    return string; //foobar //becaue another timer is going on till you have returned
  })

  .then(function p3(string) {
    console.log(string); //foobar
  });

/**
 * Inside then is a fullfillment and rejection functin of promise that it
 *
 *
 *[We are directly resolving the promise with value foo]
 * {
 *  value : "foo",
 * state : fullfilled
 * onFullfillment : [p1]
 * onRejection:[]
 * }
 *
 * [Inside returning a new Promise]
 *
 * {
 *  value : undefined
 * state : pending
 * onFullfillment : [p2]
 * on rejection : []
 * }
 *
 * {
 * value:undefine
 * state : pending
 * onfullFilment : [p3]
 * }
 *
 */
