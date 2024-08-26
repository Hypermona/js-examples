function Person(age, name) {
  this.name = name;
  this.age = age;
  this.alive = true;
  this.call = function () {
    console.log(this);
  };
}

Person.prototype.hello = function () {
  console.log("hello", this.name);
};

function Teacher(age, name, subject) {
  //call the parent method
  Person.call(this, age, name);

  this.subject = subject;
}
// methods specified in the prototype of parent can't be directly accessible
// So we need to assign Person prototype to teacher
Teacher.prototype = Object.create(Person.prototype);
// to change the constructor pointing
Teacher.prototype = Object.assign(Teacher.prototype, { constructor: Teacher });

const ram = new Teacher("Ram", 29, "english");

console.log(ram.constructor.name);
ram.hello();
