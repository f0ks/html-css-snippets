let myGlobal1 = {"original": "not changed"};
let myGlobal2 = {"original": "not changed"};

function func(arg1, arg2) {
  arg1.original = 'changed';
  arg2 = {"changed": true}
}

func(myGlobal1, myGlobal2);

console.log(myGlobal1, myGlobal2);