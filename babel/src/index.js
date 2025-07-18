class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const person = new Person("donaldDuck");
console.log(person.name);
