const Module = (function () {
  'use strict';

  console.log('init module');

  // some module init code
  let privateCounter = 0;

  const privateMethod = function () {
    return this;
    // private
  };

  const someMethod = function () {
    return privateCounter++;

    // public
  };

  const anotherMethod = function () {
    return this;

    // public
  };

  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();

console.log(Module.someMethod());
console.log(Module.someMethod());
console.log(Module.anotherMethod());