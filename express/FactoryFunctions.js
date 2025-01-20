
// class PersonMaker {
//     constructor(name, age, role){
//         this.name = name,
//         this.age = age,
//         this.role = role
//     }

//     canFly(){
//         console.log(`I am ${this.name} and I can fly`)
//     }
// }

// let lucifer = new PersonMaker("Lucifer Morning Star", 100, "devel");
// let cloe = new PersonMaker("Cloe Decker", 30, "angel");
// let daniel = new PersonMaker("Daniel swan", 38, "detective");

// console.log(lucifer)
// console.log(cloe)
// console.log(daniel)

// console.log(lucifer.prototype)


class Mammals {
    constructor(name){
        this.type = "mammal", 
        this.name = name
    } 
    eat(){
        console.log(`I am ${this.name} and I can eat`)
    }
}

class Dog extends Mammals {
    constructor(name){
        super(name)
    }

    bark(){
        console.log(`I am ${this.name} and I can Wooffff....`)
    }
}

class Cat extends Mammals {
    constructor(name){
        super(name)
    }
    meow(){
        console.log(`I am ${this.name} and I can Meowwww.......`)
    }
}