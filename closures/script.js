(function () {

    'use strict';


    function add() {
        let counter = 0;

        return function () {
            return ++counter;
        };
    }

    const myCounter = add();
    const myCounter2 = add();

    console.log(myCounter()); // 1
    console.log(myCounter()); // 2
    console.log(myCounter()); // 3

    console.log(myCounter2()); // 1
    console.log(myCounter2()); // 2

})();

console.log('--------------------------------------------------------------');


(function () {
    'use strict';

    /* Write function sum which returns a sum of arguments

    function sum() {}
    sum(2,3); // 5
    sum(3,5,-1); // 7

    */
    
    function sum() {

        let result = 0;

        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;

    }

    console.log(sum(2,3));    // 5
    console.log(sum(3,5,-1)); // 7

})();

console.log('--------------------------------------------------------------');


(function () {
    'use strict';

    /* Write function sum which returns a sum of arguments

    function sum() {}

    sum(2)(3); // 5
    sum(3)(5)(-1); // 7


    */

    function sum(num) {

        let result = 0;

        return function () {

        };

    }

    console.log(sum(2)(3));     // 5
    console.log(sum(3)(5)(-1)); // 7

})();