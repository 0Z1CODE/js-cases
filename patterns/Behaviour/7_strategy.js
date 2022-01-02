class Vehicle {
 travelTime() {
   return this.timeTaken
 }
}

class Bus extends Vehicle {
 constructor() {
  super()
  this.timeTaken = 2324
 }
}
class Taxi extends Vehicle {
  constructor() {
   super()
   this.timeTaken = 15
  }
 }
 class Car extends Vehicle {
  constructor() {
   super()
   this.timeTaken = 10
  }
 }

 class Comute {
   travel(transport) {
     return transport.travelTime()
   }
 }

 const comute = new Comute()
 console.log(comute.travel(new Taxi())); 