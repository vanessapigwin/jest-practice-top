function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let res = string;
  if (string) res = string.split("").reverse().join("");
  return res;
}

function Calculator() {
  const add = (a, b) => Number(a) + Number(b);
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      throw Error("division by zero");
    }
    return a / b;
  };

  return { add, subtract, multiply, divide };
}

function caesarCipher(string, shift) {
  return string
    .split("")
    .map((letter) => {
      const idx = 97 + ((letter.toLowerCase().charCodeAt(0) - 97 + shift) % 26);
      if (idx < 97 || idx > 122) {
        return letter;
      }
      if (letter === letter.toUpperCase())
        return String.fromCharCode(idx).toUpperCase();
      return String.fromCharCode(idx);
    })
    .join("");
}

function analyzeArray(arr) {
  arr.sort();
  const { length } = arr;
  const min = arr[0];
  const max = arr[length - 1];
  function calcAverage() {
    const sum = arr.reduce((cur, acc) => cur + acc, 0);
    return sum / length;
  }
  const average = calcAverage();
  return { average, length, min, max };
}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};
