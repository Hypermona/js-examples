// const myObj = {
//   a: 20,
//   b: 30,
// };

// function display(a, b) {
//   console.log("this.a,this.b,a,b", this.a, this.b, a, b);
// }

// // display.apply(myObj, [80, 90]);

// Function.prototype.myBind = function (thisArg, ...args) {
//   thisArg.func = this;
//   return function () {
//     return thisArg.func(...args);
//   };
// };
// Function.prototype.myCall = function (thisArg, ...args) {
//   thisArg.func = this;
//   return thisArg.func(...args);
// };
// Function.prototype.myApply = function (thisArg, args) {
//   thisArg.func = this;
//   return thisArg.func(...args);
// };
// const callable = display.myBind(myObj, 60, 70);
// display.myCall(myObj, 3, 4);
// display.myApply(myObj, [1, 2]);
// callable();

function myMap(cb, thisArg) {
  let length = this.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(cb.call(thisArg, this[i], i, this));
  }
  return result;
}
function myReduce(cb, init) {
  let length = this.length;
  let result = init;
  for (let i = 0; i < length; i++) {
    result = cb(result, this[i], i, this);
  }
  return result;
}

// Array.prototype = Object.assign(Array.prototype, { myMap });
// [(1, 2, 3, 4)].myMap((a) => console.log(a));

Array.prototype.myMap = myMap;
[(1, 2, 3, 4)].myMap((a) => console.log(a));
