class Person {
    constructor(name, age, gender) {
      this.name = "Preethi";
      this.age = 21;
      this.gender = "Female";
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
    }
  }
  

  const person1 = new Person("Preethi", 21, "Female");
  person1.displayDetails();
  
