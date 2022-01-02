class Mysym {
  constructor(initValue = 42) {
    this.sum = initValue
  }
  add(value) {
    this.sum += value
    return this
  }
}

const sum1 = new Mysym() 
console.log(sum1.add(8).add(10).add(5));

const sum2 = new Mysym(0)
console.log(sum2.add(1).add(11).add(111).add("lol"));