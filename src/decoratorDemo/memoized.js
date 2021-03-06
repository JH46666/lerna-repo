// class Person {
//   @memoize
//   get name() { return `${this.first} ${this.last}` }
//   set name(val) {
//     let [first, last] = val.split(' ');
//     this.first = first;
//     this.last = last;
//   }
// }

// let memoized = new WeakMap();
// function memoize(target, name, descriptor) {
//   let getter = descriptor.get, setter = descriptor.set;

//   descriptor.get = function() {
//     let table = memoizationFor(this);
//     if (name in table) { return table[name]; }
//     return table[name] = getter.call(this);
//   }

//   descriptor.set = function(val) {
//     let table = memoizationFor(this);
//     setter.call(this, val);
//     table[name] = val;
//   }
// }

// function memoizationFor(obj) {
//   let table = memoized.get(obj);
//   if (!table) { table = Object.create(null); memoized.set(obj, table); }
//   return table;
// }

// // A simple decorator
// @annotation
// class MyClass { }

// function annotation(target) {
//    // Add a property on target
//    target.annotated = true;
//    console.log(target.annotated);
// }

// var person = new MyClass();


class C {
  constructor(){
    this.children ='1'
  }
  @enumerable(false)
  get method() {
    return this.children.length;
   }
}

function enumerable(value) {
  return function (target, key, descriptor) {
     descriptor.enumerable = value;
     return descriptor;
  }
}

var c = new C();
c.method();
