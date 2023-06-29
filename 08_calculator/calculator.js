const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, i) => total += i, 0);
};

const power = function(a, b) {
  let init = a;
  for (let i = 0; i < b-1; i++) a *= init;
  return a;
};

const multiply = function(...args) {
  return args.reduce((prod, i) => prod *= i, 1);
};

const factorial = function(a) {
  if (a === 0) return 1;
  let fact = a;
	for (let i = a-1; i >= 1; i--) fact *= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
