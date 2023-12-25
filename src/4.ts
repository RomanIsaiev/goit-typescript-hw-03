class Key {
  constructor(private signature: number) {
    this.signature = Math.round(Math.random());
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  constructor(
    protected door: boolean,
    protected key: Key,
    private tenants: Person[] = []
  ) {
    this.door = door;
    this.key = key;
    this.tenants = tenants;
  }

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person} went in the house `);
    } else {
      console.log("the doors are closed");
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key, door = false) {
    super(door, key);
  }

  public openDoor(key): void {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("door is open");
    } else {
      console.log("door is closed");
    }
  }
}

const key = new Key(0);

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

// class Team {
//   members: Programmer[];
//   constructor(members: Programmer[]) {
//     this.members = members;
//   }
//   startProject() {
//     this.members.forEach((member) => member.code());
//   }
// }
// class Programmer {
//   code() {
//     console.log("Coding...");
//   }
// }
// const programmers = [new Programmer(), new Programmer()];
// const team = new Team(programmers);
// team.startProject();

// class Computer {
//   processor: Processor;
//   constructor() {
//     this.processor = new Processor();
//   }
//   start() {
//     this.processor.processData();
//   }
// }
// class Processor {
//   processData() {
//     console.log("Processing data...");
//   }
// }
// const computer = new Computer();
// computer.start();

// class Car {
//   driver: Driver | null = null;
//   setDriver(driver: Driver) {
//     this.driver = driver;
//   }
//   startJourney() {
//     if (this.driver) {
//       this.driver.drive();
//     }
//   }
// }
// class Driver {
//   drive() {
//     console.log("Driving...");
//   }
// }
// const driver = new Driver();
// const car = new Car();
// car.setDriver(driver);
// car.startJourney();
