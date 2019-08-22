// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest in function params', () => {
    
    it('must be the last parameter', () => {
      const fn = (...rest) => {
        assert.deepEqual([1, 2], rest);
      };
      fn(1, 2);
    });
    
    it('can be used to get all other parameters', () => {
      const fn = (firstParam, secondParam, ...rest) => {
        assert.deepEqual([3,4], rest);
      };
      fn(null, 2, 3, 4);
    });
    
    it('makes `arguments` obsolete', () => {
      const fn = (...args) => {
        assert.deepEqual([42, 'twenty three', 'win'], args);
      };
      fn(42, 'twenty three', 'win');
    });
      
    it('eliminate `arguments`!!!', () => {
      const fn = function() {return arguments};
      const [firstArg, ...rest] = fn(1, 2, 3);
      assert.deepEqual([2, 3], rest);
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
