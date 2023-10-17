const {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} = require("./fun");

// capitalize
test("capitalize: all small letters", () =>
  expect(capitalize("penguin")).toBe("Penguin"));

test("capitalize: titlecase", () =>
  expect(capitalize("Penguin")).toBe("Penguin"));

// reverse string
test("reverse string: valid string", () => {
  expect(reverseString("abcde")).toBe("edcba");
});

test("reverse string: null value", () => {
  expect(reverseString("")).toBe("");
});

// calculator
test("caculator: add two numbers", () => {
  const calculator = Calculator();
  expect(calculator.add(1, "2")).toBe(3);
});

test("calculator: subtract two numbers", () => {
  const calculator = Calculator();
  expect(calculator.subtract("10", -10)).toBe(20);
});

test("calculator: multiply two numbers", () => {
  const calculator = Calculator();
  expect(calculator.multiply(10, "10")).toBe(100);
});

test("calculator: division - two numbers", () => {
  const calculator = Calculator();
  expect(calculator.divide(10, 10)).toBe(1);
});

test("calculator: division by zero", () => {
  const calculator = Calculator();
  expect(() => calculator.divide(10, 0).toThrow());
});

// caesar cipher
test("caesar cipher: base case", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("caesar cipher: text wrapping", () => {
  expect(caesarCipher("zabcde", 1)).toBe("abcdef");
});

test("caesar cipher: case is applied", () => {
  expect(caesarCipher("ZabcdE", 1)).toBe("AbcdeF");
});

test("caesar cipher: punctuation applied", () => {
  expect(caesarCipher("Abcd?", 2)).toBe("Cdef?");
});

// analyze array
test("analyze array: average", () => {
  const array = analyzeArray([1, 2, 3, 4, 5]);
  expect(array).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
