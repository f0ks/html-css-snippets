const Module = (function () {
  'use strict';

  const privateMethod = function () {
    return this;
    // private
  };

  const someMethod = function () {
    return this;

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