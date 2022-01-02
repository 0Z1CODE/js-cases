const car = {
  wheels: 3,

  init() {
    console.log(`i have ${this.wheels} wheels, my owner ${this.owner}`);
  },

  addWheels() {
    this.wheels += 1
  }
};

const witOwner = Object.create(car, {
  owner: {
    value: "Mark"
  },
});

witOwner.addWheels();
witOwner.init();
