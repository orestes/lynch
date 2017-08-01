class Calculator {
  add(b, a) {
    if (a === undefined) {
      throw new Error('Missing second operator')
    }
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  times(b, a) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

module.exports = Calculator;
