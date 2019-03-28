(function () {
    'use strict';

    /*


    */
	
	let myArr = [
		{id: 0, value: "foo"},
		{id: 1, value: "bar"},
		{id: 2, value: 123},
	];
	
	// delete arr el with id 1
	//myArr = myArr.filter(el => el.id !== 1)
	
	// change arr el with id 2
	const foundIndex = myArr.findIndex(el => el.id == 2);
	myArr[foundIndex] = 777;


    console.log(myArr);


})();

console.log('--------------------------------------------------------------');
