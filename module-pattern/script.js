console.log('init module');

let privateCounter = 0;

const privateMethod = () => privateCounter;

export const someMethod = () => privateCounter++;

export const anotherMethod = () => privateMethod();

console.log(someMethod());
console.log(someMethod());
console.log(anotherMethod());
