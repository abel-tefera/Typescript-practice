const add = (a: number, b: number): void | string => {
  if (a === 10) {
    return "10";
  }
  return undefined;
};

console.log(add(10, 2));
