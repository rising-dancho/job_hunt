let x;

// new => instatiating a Date object - its a constructor object.. while Math is a Utility object thats why we dont instatiate Math
let d = new Date();

x = d.toString();

// Timestamp of date in milliseconds
x = d.getTime();
x = d.valueOf();

// Date
x = d.getFullYear();
x = d.getDate(); // day of today for the month
x = d.getDay(); // day of the week : monday, tuesday
x = d.getMonth(); // zero-based month + 1

// Time
x = d.getHours() - 12;
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Date format per region
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('en-PH').format(d);

// Dates: long => January . short => Jan . 2-digit => 01
x = Intl.DateTimeFormat('en-PH', { month: '2-digit' }).format(d);
x = Intl.DateTimeFormat('en-PH', { month: 'long' }).format(d);
x = Intl.DateTimeFormat('en-PH', { month: 'short' }).format(d);

// api for pre formated date
x = d.toLocaleString('en-PH', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Manila',
});

console.log(x);
