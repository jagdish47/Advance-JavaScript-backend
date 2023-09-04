function fetchNextElement(array) {
  let idx = 0;

  function next() {
    if (idx == array.length) {
      return undefined;
    }

    const nextElement = array[idx];
    idx++;
    return nextElement;
  }
  return { next };
}

const automaticFetcher = fetchNextElement([43, 90, 22, 11]);

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
//Now it's behaving like Declarative language you just tell what you want, you dont care how, where all that

/**
 * What is Iterator ?
 * In JavaScript, an iterator is an object that defines a sequence of values and allows you to traverse over it.
 *
 *
 * written custom Iterator
 *
 * Inside what we are doing we have create a function which automatically give you next element of array
 * You don't need to know what behind it it will give you you next iteration
 * It's just like you have to open tab get data open tab get data, you dont need to go manually and get the data
 */
