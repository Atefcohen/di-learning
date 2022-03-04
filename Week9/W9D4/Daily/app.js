//Exercise 1
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });
