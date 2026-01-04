// variation #1:
const add = (x,y) => x + y;
const PI = 3.141516;
const square = (x) => x * x;


// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


// variation #2:
const math = {
  add: add,
  PI:PI,
  square:square
}
module.exports = math;

// variation #3:
// module.exports.add = (x,y) => x + y;
// module.exports.PI = 3.141516;
// module.exports.square = (x) => x * x;
