const myGlobal1 = { original: 'not changed' };
const myGlobal2 = { original: 'not changed' };

const func = (arg1, arg2) => {
  arg1.original = 'changed';
  arg2 = { changed: true }; // reassignment doesn't affect outer ref
};

func(myGlobal1, myGlobal2);

console.log(myGlobal1, myGlobal2);
