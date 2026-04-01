// Counter closure
const add = () => {
  let counter = 0;
  return () => ++counter;
};

const myCounter = add();
const myCounter2 = add();

console.log(myCounter());  // 1
console.log(myCounter());  // 2
console.log(myCounter());  // 3

console.log(myCounter2()); // 1
console.log(myCounter2()); // 2

// Sum with rest params
const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(2, 3));     // 5
console.log(sum(3, 5, -1)); // 7

// Curried sum
const curriedSum = (num) => (num2) => num + num2;

console.log(curriedSum(2)(3)); // 5
