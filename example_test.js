const { addNumbers, square } = require('./example');

test('adds 1 + 2 to equal 3', () => {
    expect(addNumbers(1, 2)).toBe(3);
  });
  
  test('adds 5 + 7 to equal 12', () => {
    expect(addNumbers(5, 7)).toBe(12);
  });

describe('square', () => {
  test('returns the square of a positive number', () => {
    expect(square(4)).toBe(16);
  });

  test('returns the square of a negative number', () => {
    expect(square(-3)).toBe(9);
  });

  test('returns 0 when passed 0', () => {
    expect(square(0)).toBe(0);
  });
});