class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

const person = new Person("donaldDuck", 18);
console.log(person.name);
console.log(person.age);
