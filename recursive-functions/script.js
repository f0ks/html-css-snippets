const factorial = (num) => {
  if (num < 0) return;
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(`factorial of 5 is ${factorial(5)}`);
