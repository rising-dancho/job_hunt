let amount = '100';

// Converting String to Number
amount = parseInt(amount);
amount = +amount; //unary operator
amount = Number(amount);

// Convert a Number to a String
amount = 100;
amount = amount.toString(); // eventhough a primitive is not an object, javascript creates a wrapper so that the method .toString() can be called
amount = String(amount);

// Convert String to Float (Decimal)
amount = '99.5';
amount = parseFloat(amount);

// Truncate Decimal
amount = '99.5';
amount = parseInt(amount);

console.log(amount, typeof amount);

// Not a Number
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' * 3);
