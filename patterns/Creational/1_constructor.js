class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return `https://${this.ip}:3002`;
  }
  geName() {
    return this.name;
  }
}

const aws = new Server("Aws Ukraine", "192.177.22.54");

console.log(aws.geName() +  "->" + aws.getUrl());