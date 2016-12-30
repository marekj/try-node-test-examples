// eloquent javascript

var rabbit = {} //object

// set property speak to be a function
rabbit.speak = function (line) {
    console.log("rabbit says " + line)
}

rabbit.speak("hello") // rabbit says hello


// this is bound to the object rabbit
var rabbit = {name: "Joe"}
rabbit.speak = function (line) {
    console.log("rabbit says " + line + ". My name is " + this.name)
}
rabbit.speak("hello") // rabbit says hello. My name is Joe


// or create a function and assign it to property of object. object has now 'method' and this points to the object
function say(line) {
    console.log("rabbit says " + line + ". My name is " + this.name)
}
var rabbit = {name: "Harry", speak: say}
rabbit.speak("hello") // rabbit says hello. My name is Harry


//apply. how is that used? metaprogramming in js?
var r = {name: "Leo"}
say.apply(r, ["Yo Yo"])

//call. how is that diff from apply?
say.call(r, ["Call Call Call"])

// bind? how do you use bind?


// PROTOTYPES

var o = {} //empty
console.log(o.toString) // outputs value of property. function toString(){}
console.log(o.toString()) // "[object Object]"

// how does toString property end up being a there? I didn't put it there right? o is empty.

// because o has prototype. template object toString property lives in o.prototype
// Object.getPrototypeOf(o) is an Object
// Object.prototype   // this is a property and not a function

// each is true
// Object.getPrototypeOf([]) == Array.prototype
// Object.getPrototypeOf({}) == Object.prototype
// Object.getPrototypeOf(1) == Number.prototype
// Object.getPrototypeOf(isNaN) == Function.prototype
// Object.getPrototypeOf("hi") == String.prototype

// but
// Object.getPrototypeOf(Object.prototype) is null . That's the end of chain of prototype lookup


// create object from specific prototype
// var r = {} // this is based on Object.prototype

var protoObject = {name: 'Proto'}
var oFromProto = Object.create(protoObject)
// now oFromProto object has a prototype protoObject

console.log(Object.getPrototypeOf(oFromProto)) // { name: 'Proto' }
// every object basded on protoObject will have name 'Proto' unless you override it

// constructor new has to be applied to function and not Object. you can't new on object
function ProtoObject() {
    this.foo = 'ProtoFunction'
}
var oConstructed = new ProtoObject()

console.log(oConstructed) // ProtoObject {}
console.log(Object.getPrototypeOf(oConstructed)) // ProtoObject {}
console.log(oConstructed.foo)

/// add property

ProtoObject.prototype.logFoo = function(){
    console.log("Logging the foo: " + this.foo)
}

oConstructed.logFoo() // outputs  "Logging the foo: ProtoFunction"


//prototypeless object
var nopro = Object.create(null) //if prototype gets in the way
Object.getPrototypeOf(nopro) // null . it has no toString property


//polymorphism


