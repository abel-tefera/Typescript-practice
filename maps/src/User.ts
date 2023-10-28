import faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am at ${this.location.lat} lat and ${this.location.lng} lng.`
    );
  }
}
