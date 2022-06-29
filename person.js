class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
    }
}

module.exports = Person;