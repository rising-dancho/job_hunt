let x;
const num = new Number(5.4567);

x = num.toString();

// Check how many digits a number is
x = num.toString().length;

// if you want to add 00s to a digit.. it also turns it into a String representation of a decimal
x = num.toFixed(2);

// this includes the whole number to the count. 5.5
x = num.toPrecision(2);

// gives the exponential value. the paramter considers how many decimal places to show
x = num.toExponential(2);

// converts the number to the local written equivalent
x = num.toLocaleString('ar-EG');

// gives the actual value of the variable
x = num.valueOf();

// Number object properties
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x, typeof x);
