function Person(name) {
  this.name = name
}

Person.prototype.printName = () => {
  console.log(this.name)
}

const p1 = new Person('jack')
p1.printName()

class Man extends Person{

  printName() {
    super.printName()
  }
}