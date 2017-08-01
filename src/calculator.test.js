const Calculator = require('./calculator');

test('add 1 + 2 = 3', () => {
  // Set Up
  const calculator = new Calculator();
  // Execute
  const result = calculator.add(1, 2);
  // Assert
  expect(result).toBe(3);
});

test('add 1 + undefined = Missing second operator', () => {
  // Set Up
  const calculator = new Calculator();
  // Execute
  const execute = () => {
    calculator.add(1)
  };
  // Assert
  expect(execute).toThrow('Missing second operator')
});

test('substract 1-2 = -1', () => {
  // Set Up
  const calculator = new Calculator();
  // Execute
  const result = calculator.subtract(1, 2);
  // Assert
  expect(result).toBe(-1);
});

test('time 1 * 2 = 2', () => {
  // Set Up
  const calculator = new Calculator();
  // Execute
  const result = calculator.times(1, 2);
  // Assert
  expect(result).toBe(2);
});

test('divide 5 / 2.5 = 2', () => {
  // Set Up
  const calculator = new Calculator();
  // Execute
  const result = calculator.divide(5, 2.5);
  // Assert
  expect(result).toBe(2);
});
