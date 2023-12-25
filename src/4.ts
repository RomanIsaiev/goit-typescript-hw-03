class Key {
  constructor(private signature: number) {
    this.signature = Math.round(Math.random());
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  public getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
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
  constructor(key: Key, door: boolean) {
    super(door, key);
  }

  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("door is open");
    } else {
      console.log("key is wrong");
    }
  }
}

const key = new Key(0);

const myhouse = new MyHouse(key, false);

const person = new Person(Jonh);

myhouse.openDoor(person.getKey());

myhouse.comeIn(person);

export {};
