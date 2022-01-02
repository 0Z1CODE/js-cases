class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }
  get url() {
    return `https:// ${this.ip}:${this.port}`
  }
}

function AWS (server) {
  server.isAws = true ;
  server.aswIno = function() {
    return server.url
  }
  return server
}
let s1 = AWS (new Server ("124.543.654.4", 90)); //передаем аргументом определение класса
console.log(s1.isAws); // проверка на правду
console.log(s1.aswIno());
function AZURE (server) {
  server.isAzure = true;
  server.port += 500
  // server.aswIno = function() {
  //   return server.url
  // }
  return server
}

let s2 = AZURE (new Server ("124.543.654.4", 90)); //передаем аргументом определение класса
console.log(s2.isAzure); // проверка на правду
console.log(s2.port);
