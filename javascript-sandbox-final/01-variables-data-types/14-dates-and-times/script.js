let d;

d = new Date();

d = d.toString();

// zero based: the counting starts at 0.. so january is 0 and february is 1
d = new Date(2026, 1, 10, 6, 30, 30, 100);

// if you passed in String it gives the correct date
d = new Date('2021-07-10');
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2026 12:30:00');
d = new Date('07/10/2026 12:30:00');

// Timestamps
d = Date.now();

d = new Date('2021-07-10');
d = d.getTime();
d = d.valueOf();

// milliseconds time stamp
d = new Date(1625875200000);

//  converting to seconds
d = Math.floor(Date.now() / 1000);

console.log(d, typeof d);
