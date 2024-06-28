import test, { expect } from "@playwright/test";

const people = ["John", "Jane", "Joe"];

for (const person of people) {
  test(`Testing ${person}`, () => {
    expect(`Hello ${person}`).toBe(`Hello ${person}`);
  });
}

const map1 = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

for (const [key, value] of map1) {
  test(`Testing Map ${key} ${value}`, () => {
    expect(`Map ${key} ${value}`).toBe(`Map ${key} ${value}`);
  });
}

const inputs = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const [a, b, c] of inputs) {
  test(`Testing ${a} + ${b} = ${c}`, () => {
    expect(a + b).toBe(c);
  });
}
