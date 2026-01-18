let x;
x = 5 + '5';

x = 5 + +'5';

// If its not a plus, javascript auto converts it to a number
x = 5 * '5';

// null will be coerced as zero
x = 5 + null;

// null gets converted into a number
x = +null;

// boolean values become numerical 0 - false, 1 - true
x = +true;

// if boolean + number = number + 1
x = 5 + true;

// we cant add anything to undefined.. because we will get (Not a Number) NaN
x = 5 + undefined;

console.log(x, typeof x);
