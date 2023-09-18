const linearSearch = function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i; // Return the index where the element is found
    }
  }

  return -1; // Return -1 if the element is not found
};

const binarySearch = function search(arr, x) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = s + (e - s) / 2;
    mid = math.floor(mid);

    if (arr[mid] == x) {
      return true;
    } else if (arr[mid] > x) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return false;
};

module.exports = { linearSearch, binarySearch }; //we are returning an object

// You can do like that as well

// module.exports.linearSearch = linearSearch;
// module.exports.binarySearch = binarySearch; //it's no more object it's function
