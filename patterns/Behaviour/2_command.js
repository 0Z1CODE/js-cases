class MyMAth {
  constructor(initialValue = 0 ) {
    this.num = initialValue
  }
  squ() {
    return this.num ** 2
  }
  cube () {
    return this.num **3 
  }
}
class Command {
  constructor(subject) {
    this.subject = subject
    this.comandExecuted = []
  }
  execute(command) {
    this.comandExecuted.push(command)
    return this.subject[command]()
  }
}
const x = new Command(new MyMAth(2))
console.log( x.execute("squ"))
console.log( x.execute("cube"))
console.log( x.execute("cube"))
console.log( x.comandExecuted)

