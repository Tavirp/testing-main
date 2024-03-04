const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});



// Homework: 

describe('Subtraktion und Multiplikation', () => {

  test('Subtraktion von 5 - 3 sollte 2 ergeben', () => {
      expect(subtract(5, 3)).toBe(2);
  });

  test('Subtraktion von 10 - 7 sollte 3 ergeben', () => {
      expect(subtract(10, 7)).toBe(3);
  });

  test('Subtraktion von 15 - 9 sollte 6 ergeben', () => {
      expect(subtract(15, 9)).toBe(6);
  });

  
  test('Multiplikation von 4 * 6 sollte 24 ergeben', () => {
      expect(multiply(4, 6)).toBe(24);
  });

  test('Multiplikation von 2 * 8 sollte 16 ergeben', () => {
      expect(multiply(2, 8)).toBe(16);
  });

  test('Multiplikation von 7 * 3 sollte 21 ergeben', () => {
      expect(multiply(7, 3)).toBe(21);
  });
});