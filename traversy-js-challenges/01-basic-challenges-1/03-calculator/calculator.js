function calculator(x, y, operator) {
  let result;
  if (operator === '*') {
    result = x * y;
  } else if (operator === '/') {
    result = x / y;
  } else if (operator === '+') {
    result = x + y;
  } else {
    result = x - y;
  }

  return result;
}

module.exports = calculator;
