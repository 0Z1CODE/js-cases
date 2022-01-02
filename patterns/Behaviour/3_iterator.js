class MyIterator {
  constructor(data) {
    this.data = data
    this.index = 0
  }
  [Symbol.iterator]() {
    return {
      next: () => {
        if(this.index< this.data.length) {
          return {
            value: this.data[this.index ++],
            done: false
          }

        }
        else {
          this.index = 0
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}



function* generator (collection) {
  let index = 0; 
  for (; index < collection.length;) {
    yield collection[index ++ ]
    
  }
}

const iterator = new MyIterator(["This", "is", "iterator"]) 
const gen = generator(["This", "is", "iterator"]) 

// for (const val of iterator) {
//   console.log("value:",  val)
// }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);