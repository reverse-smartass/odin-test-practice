import {
  capital,
  reverseString,
  calculator,
  areNumbers,
  caesarCipherLetter,
  caesarCipher,
  isNumberArray,
  analyzeArray
} from "./script";

test("Capitalize", () => {
  expect(capital("case ")).toBe("Case");
});

test("Filtering non-words", () => {
  expect(capital("case 123")).toBe("Not a word");
});

test("Reversing a word", () => {
  expect(reverseString("code")).toBe("edoc");
});

test("Number verification", () => {
  expect(areNumbers("code", 0)).toBe(false);
  expect(areNumbers("code", "edoc")).toBe(false);
  expect(areNumbers(0, "code")).toBe(false);
  expect(areNumbers(1, 0)).toBe(true);
});

test("Calculator: add", () => {
  expect(calculator.add(100, 99)).toBe(199);
  expect(calculator.add(100, "code")).toBe("One or both are not valid numbers");
});

test("Calculator: subs", () => {
  expect(calculator.subs(100, 99)).toBe(1);
  expect(calculator.subs(100, "code")).toBe(
    "One or both are not valid numbers",
  );
});

test("Calculator: multiply", () => {
  expect(calculator.multiply(100, 99)).toBe(9900);
  expect(calculator.multiply(100, "code")).toBe(
    "One or both are not valid numbers",
  );
});

test("Calculator: divide", () => {
  expect(calculator.divide(99, 100)).toBe(0.99);
  expect(calculator.divide(100, "code")).toBe(
    "One or both are not valid numbers",
  );
  expect(calculator.divide(99, 0)).toBe("Division by 0");
});

test("Caesar Cipher (letter)", () => {
  expect(caesarCipherLetter("a", 3)).toBe("d");
  expect(caesarCipherLetter("B", 4)).toBe("F");
  expect(caesarCipherLetter("[", 999)).toBe("[");
});

test("Caesar Cipher (sentence)", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("xyz", 4)).toBe("bcd");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("these are words @24 7h353 @43 N0t", 2)).toBe(
    "vjgug ctg yqtfu @24 7j353 @43 P0v",
  );
});

test("Is Numerical Array", () => {
  expect(isNumberArray([1, 8, 3, 4, 2, 6])).toBe(true);
  expect(isNumberArray([1, 8, 3, 4, 2, 'a'])).toBe(false);
  expect(isNumberArray(['a', 8, 3, 4, 2, 6])).toBe(false);
  expect(isNumberArray([1, 8, 3, 's', 2, 6])).toBe(false);
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 2, 4, 2, 6])).toStrictEqual({
    average: 23/6,
    min: 1,
    max: 8,
    length: 6,
  });
});
