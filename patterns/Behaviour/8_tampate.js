class Emplove {
  constructor(name, salary) {
    (this.name = name), (this.salary = salary);
  }
  response() {}

  work() {
    retern`${this.name} doing ${this.response()}`;
  }

  getPaid() {
    return `${this.name} have a ${this.salary}`;
  }
}
 class Developer extends Emplove {
   constructor(name,salary) {
    super(name,salary) 
     
   }
   response() {
    return  `code some apps`
   }
 }

 class Tester extends Emplove {
  constructor(name,salary) {
   super(name,salary) 
    
  }
  response() {
   return  `Test some apps`
  }
}

const dev = new Developer("Max", 100000)
console.log(dev.getPaid());
const tester = new Tester("Lol", 1000)
console.log(tester)