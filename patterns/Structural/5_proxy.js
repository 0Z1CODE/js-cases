function networkFetch(url) {
  return `${url} - server answer`;
}
const _cache = new Set()
const _proxy = new Proxy(networkFetch, {
  apply(target, thisArgs, args) {
    const url  = args[0]
    if (_cache.has(url)) {
      return `${url} - cache answer`;
    }
    else _cache.add(url)
    return Reflect.apply(target, thisArgs, args)
  }
})


console.log(_proxy("react.io"));
console.log(_proxy("react.io"));
console.log(_proxy("angular.io"));
console.log(_proxy("angular.io"));
