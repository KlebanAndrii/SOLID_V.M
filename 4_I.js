// //  Interface segregation principle

class Animal {
    constructor(name) {
        this.name = name
    }
}

const walks = {
    walk() {
        console.log(`${this.name} can walk`)
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}

class Dog extends Animal {
}

class Eagle extends Animal {
}

class Whale extends Animal {
}

Object.assign(Dog.prototype, walks, swimmer)
Object.assign(Eagle.prototype, flier, walks)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Dog')
dog.walk()
dog.swim()

const eagle = new Eagle('Eagle')
eagle.fly()
eagle.walk()

const whale = new Whale('Whale')
whale.swim()
