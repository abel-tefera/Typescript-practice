interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken? ${this.broken}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printVehicle = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
