// BREAK =>  STOP: certain situations wherein when you found your target and there is need to continue
for (let i = 0; i <= 20; i += 1) {
  if (i === 15) {
    console.log('Breaking...');
    break;
  }
  console.log('Current Iteration: ' + i);
}

//  CONTINUE
for (let j = 1; j <= 20; j += 1) {
  if (j === 13) {
    continue;
    console.log(`Skipping ${j}th Floor..`); // you see this line never ran.. beCause of the Continue
  }
  console.log(j);
}
