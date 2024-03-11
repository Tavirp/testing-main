const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(17)).toBe(false);
  });

test('should throw a TypeError if input is not a number', () => {
  expect(() => isAdult('18')).toThrow(TypeError);
  expect(() => isAdult(null)).toThrow(TypeError);
  expect(() => isAdult(undefined)).toThrow(TypeError);
  });
  
test('should throw a TypeError if age is negative', () => {
    expect(() => isAdult(-5)).toThrow(TypeError);
    expect(() => isAdult(-1)).toThrow(TypeError);
  });
});