class Car {
  constructor (model, price) {
    this.model = model
    this.price = price
  }
}



class CarsConcern {
  constructor() {
    this.cars = []
  }
  create( model, price) {
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }

    const newCar = new Car(model, price) 
    this.cars.push(newCar) 
    return newCar


}

getCar(model) {
  return this.cars.find(car => car.model === model)
}
}

const factory = new CarsConcern();

const audiA5 = factory.create("AUDI", 1000) //return Car { model: 'AUDI', price: 1000 }
const bmwZ4 = factory.create("BMWZ4", 100000) // return Car { model: 'BMW', price: 25000 }  
const bmwX6 = factory.create("BMW", 25000) //return  Car { model: 'BMW', price: 25000 }
const bmwM5 = factory.create("BMW", 5000000) //return  Car { model: 'BMW', price: 25000 }




// bmwX6 === bmwZ4 return true мы закешировали данные, что бы не грузить новые, так как бмв уже было определено и использовано
setTimeout(()=> {console.log(bmwX6)}, 100)
console.log(audiA5);
console.log(bmwZ4);
console.log(bmwM5);


