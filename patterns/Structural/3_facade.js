class Complaints {
  constructor() {
    this.complaints = []
  }
  reply(complaint) {

  }
  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer}, ${details}`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer}, ${details}`
  }
}


  
class ComplaintRegestry {
  constructor() {

  }
  register(customer, type, details) {
    const id = Date.now();
    let complaint;
    if (type === "service") {
      complaint = new ServiceComplaints()
    }
    else  complaint = new ProductComplaints()

    return complaint.add({id , customer, details })
  }
}

let registry = new ComplaintRegestry()  
// console.log(registry.register("Max", "service", "'404'"));
console.log(registry.register("Mark", "product" , "'Need more'"));
console.log(registry.register("MAx", "service" , "'Money '"));