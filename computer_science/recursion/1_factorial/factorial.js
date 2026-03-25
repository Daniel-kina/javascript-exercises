const factorial = function (num) {
  if (num < 0) {
    return undefined;
  }

  if (!Number.isInteger(num)) {
    return undefined;
  }

  if (num == 0) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
};

// Do not edit below this line
module.exports = factorial;
