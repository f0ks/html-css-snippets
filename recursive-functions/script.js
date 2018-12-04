(() => {
    'use strict';

    const factorial = (num) => {

        // termination
        if (num < 0) return;

        // base
        if (num === 0) return 1;

        // recursion
        return num * factorial(num - 1);

    };


    console.log(`factorial of 5 is ${factorial(5)}`);


})();


