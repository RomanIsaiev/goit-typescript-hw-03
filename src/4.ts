class Key {
  private signature: number = Math.round(Math.random());

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`person went in the house `);
    } else {
      console.log("the doors are closed");
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("door is open");
    } else {
      console.log("key is wrong");
    }
  }
}

const key = new Key();

const myhouse = new MyHouse(key);

const person = new Person(key);

myhouse.openDoor(person.getKey());

myhouse.comeIn(person);

export {};
