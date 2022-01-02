class Subject  {
  constructor() {
    this.observers = []
  }
  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs=> obs !== observer)
  }

  init(action) {
    this.observers.forEach(observer =>  { observer.update(action)  })
  }
}

class Observer {
  constructor(state ) {
    this.state = state
    this.initialState = state
  }

  update(action) {
    switch(action.type) {
        case "INCRIMENT": 
        this.state = ++this.state
        break
        case "CECRIMENT": 
        rhis.state = --this.state
        break
        case "ADD": 
        rhis.state +=action.payload
        break
        default: this.state = this.initialState
    }
  }
}
 
const stream$ = new Subject()

const obs1 = new Observer(1)
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.init({type: "INCRIMENT"})

console.log(obs1.state);
console.log(obs2.state);