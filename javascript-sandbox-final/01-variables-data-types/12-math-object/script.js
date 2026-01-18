let x;

x = Math.sqrt(16);

x = Math.abs(-5);

// Round
x = Math.round(4.2);

// Round Up
x = Math.ceil(4.2);

// Round Down
x = Math.floor(4.9);

// Power Of (2 raised to 3)
x = Math.pow(2, 3);

// MIN
x = Math.min(1, 2, 4); // doesnt accept array

// MAX
x = Math.max(6, 9, 2, 5);

// Generating Random Number
x = Math.random() * 10; // 0 - 10
x = Math.floor(x);

x = Math.random() * 10; // 1 - 10
x = Math.floor(x) + 1;

// x.toFixed turns the decimal into String and not a number. so the correct way to remove the decimal is to use Math.floor() or Math.ceal()
console.log(x, typeof x);
