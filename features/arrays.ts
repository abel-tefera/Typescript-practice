const arr: (string | (string | number)[] | (string | null)[] | undefined)[] = [
  ["a", 10],
  "b",
  ["c"],
  undefined,
  [null, "d"],
];

type Drink = [string, boolean, number]; // tuple
const pepsi: Drink = ["brown", true, 40];
pepsi[0] = "Pink";
