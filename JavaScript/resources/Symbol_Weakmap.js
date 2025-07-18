/**
 * ==============================
 * LESSON: Symbol()
 * ==============================
 */
const PRIVATE_ID = Symbol();
const PRIVATE_BALANCE = Symbol();

class BankAccount {
  constructor(id, owner, balance) {
    this[PRIVATE_ID] = id;
    this.owner = owner;
    this[PRIVATE_BALANCE] = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this[PRIVATE_BALANCE] += amount;
    }
  }
}

const account = new BankAccount("12345", "donaldtrump", 1000);
// enumerable = false
for (const key in account) {
  console.log(key);
}

/**
 * ==============================
 * LESSON: WEAKMAP()
 * ==============================
 */
const privateData = new WeakMap();

class Person {
  constructor(name, id) {
    this.name = name;
    privateData.set(this, {
      id: id,
    });
  }
}

const person = new Person("DonaldTrump", "1234567890");
console.log(person.name);
console.log(person.id);
console.log(privateData.get(person));
