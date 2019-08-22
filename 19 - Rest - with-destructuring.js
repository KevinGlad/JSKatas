// 19: rest - with-destructuring
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest with destructuring', () => {
    
    it('rest parameter must be last', () => {
      const [...all] = [1, 2, 3, 4];
      assert.deepEqual(all, [1, 2, 3, 4]);
    });
    
    it('assign rest of an array to a variable', () => {
      const [first, ...all] = [1, 2, 3, 4];
      assert.deepEqual(all, [2, 3, 4]);
    });
    
    // the following are actually using `spread` ... oops, to be fixed
    it('concat differently', () => {
      const theEnd = [3, 4];
      const allInOne = [1, 2, ...theEnd];
      assert.deepEqual(allInOne, [1, 2, 3, 4]);
    });
    
    it('`apply` made simple, even for constructors', () => {
      const theDate = [2015, 1, 1];
      const date = new Date(...theDate);
      assert.deepEqual(new Date(2015, 1, 1), date);
    });
    
  });

myFunction(1,2,3);
*/
// rest paramator
// rest paramator syntax is 3 dots ...
// rest paramator takes indivdual elements and puts them into an array.
// arrow functions get a lexical "arguments" object just like they get a lexical "this" object.
/*
let myFunction = function (myArg1,...myArgs){

    console.log(myArgs);
}

myFunction(1,2,3);
*/
// spread and rest are like a funnel.  If you put individual elements into the large side they all get stuffed into an array.
// if you stuff an iterable object (like an array) into the small side, they get split into individual elements.
/*
// multi dimensional arrays. this is a two dimension array
let myArray = [['a','A'],['b','B'],['c','C'],['d','D']];
console.log(myArray[0][1]);
console.log(myArray[1][0]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[0].length);
*/
let myArray = ['a','b','c','d'];

let myInObject = {
    otherValue: 'kg'
};

let myNameOb = {
    otherValue: 'kevin'
};

myArray.forEach(function (myValue, index, array){

    myValue += this.otherValue;
    console.log(myValue);

});
