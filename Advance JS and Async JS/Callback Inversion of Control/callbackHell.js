//When we nest multiple callback within a funciton is called callback hell
//it's readability problem

function simulateAsyncAPI(text, delay, callback) {
  setTimeout(() => {
    console.log(text);
    callback();
  }, delay);
}

simulateAsyncAPI("Operation 1", 1000, () => {
  simulateAsyncAPI("Operation 2", 500, () => {
    simulateAsyncAPI("Operation 3", 300, () => {
      simulateAsyncAPI("Operation 4", 200, () => {
        // More nested callbacks...
      });
    });
  });
});
