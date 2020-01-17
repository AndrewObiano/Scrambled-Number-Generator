module.exports = function(n) {
  // do work here
  let numbers = [];

  while (numbers.length < n) {
    let random = Math.floor(Math.random() * n);
    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }

  return numbers;
};
