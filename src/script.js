import "./style.css";

function isString(string) {
  const regex = /^[A-Za-z]+$/;
  return regex.test(string);
}

export function areNumbers(x, y) {
  return (
    typeof x === "number" && typeof y === "number" && !isNaN(x) && !isNaN(y)
  );
}

export function capital(string) {
  if (isString(string.trim())) {
    const s = string.trim().toLowerCase();
    const S = s.charAt(0).toUpperCase();
    return S + s.slice(1);
  } else {
    return "Not a word";
  }
}

export function reverseString(string) {
  if (isString(string)) {
    let res = "";
    for (let i = string.length - 1; i >= 0; i--) {
      res += string.charAt(i);
    }
    return res;
  } else {
    return "Not a word";
  }
}

export const calculator = {
  add: (x, y) => {
    return areNumbers(x, y) ? x + y : "One or both are not valid numbers";
  },
  subs: (x, y) => {
    return areNumbers(x, y) ? x - y : "One or both are not valid numbers";
  },
  multiply: (x, y) => {
    return areNumbers(x, y) ? x * y : "One or both are not valid numbers";
  },
  divide: (x, y) => {
    return y === 0
      ? "Division by 0"
      : areNumbers(x, y)
        ? x / y
        : "One or both are not valid numbers";
  },
};

export function caesarCipher(string, value) {
  let res = "";

  for (let i = 0; i < string.length; i++) {
    res += caesarCipherLetter(string.charAt(i), value);
  }
  console.log(res);
  return res;
}

export function caesarCipherLetter(char, value) {
  let min = 0;
  let max = 0;
  let initialNumber = char.charCodeAt(0);
  if (initialNumber >= 97 && initialNumber <= 122) {
    min = 97;
    max = 122;
  } else if (initialNumber <= 90 && initialNumber >= 65) {
    min = 65;
    max = 90;
  } else {
    return char;
  }

  let newNumber =
    initialNumber + value > max
      ? min - 1 + ((initialNumber + value) % max)
      : initialNumber + value;

  return String.fromCharCode(newNumber);
}

export function isNumberArray(array) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function analyzeArray(array) {
  if (isNumberArray(array)) {
    let sum = 0;
    /* let min = Infinity;
        let max = -Infinity; */

    for (let i = 0; i < array.length; i++) {
      sum += array[i];

      /*  if(array[i] < min){
                min = array[i];
            }
            if(array[i] > max){
                max = array[i];
            } */
    }

    return {
      average: sum / array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length,
    };
  }
}
