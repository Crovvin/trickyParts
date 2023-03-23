function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNumber(number) {
      if (number === undefined) return total;
      total += number;
      return addNumber;
    };
}

module.exports = { curriedAdd };
