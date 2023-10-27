//JS CLASSES:
/*classes are a way to define and create oobjects with a blueprient, encapsulating both data(properties) and behavior(methods) into a single entity. Classes provide a convinient and organized structure for creating and managing objects in codes.*/

//DEFINING A CLASS:

/*In JavaScript, the constructor is a special method within a class that is automatically called when you create an object (an instance) from that class using the new keyword. The constructor method is used to initialize the properties and perform any setup or configuration that is needed when an object is created.

Here's a basic explanation of the constructor method:

Initialization: It is typically used to set the initial values of the object's properties. These property values can be specific to each instance created from the class.

Automatic Invocation: The constructor method is called automatically when you create an object from the class. You don't need to explicitly call it; JavaScript handles this for you.

Parameterized: The constructor method can accept parameters.These parameters can be passed when you create an object, allowing you to customize the initial state of the object.
In the context of programming and software development, a "blueprint" is a metaphor used to describe a plan or a design for creating objects or structures. It's a way to think about how to create instances (objects) of a particular class.

Here's a more detailed explanation:

Class as a Blueprint: In object-oriented programming, a "class" is a blueprint for creating objects. It defines the structure and behavior of those objects. Think of it as a template that specifies what properties (attributes) and methods (functions) objects of that class will have.

Creating Objects: When you create an object from a class (sometimes called an instance), you're essentially using the blueprint to create a real, usable object with the properties and methods specified by the class.

Consistency and Reusability: Using classes and blueprints helps maintain consistency in your code. You can create multiple objects of the same class, and they will all have the same structure and behavior. It also promotes code reusability, as you can create new objects from the same blueprint whenever needed.

Analogy: Think of a class as a blueprint for a house. The blueprint defines the layout, the number of rooms, and the features of the house. You can then use the same blueprint to construct multiple houses with the same design. Each house built from the blueprint is an instance of the house class.

In summary, a "blueprint" in programming represents the design and structure of objects, and a "class" is a code representation of that blueprint. It defines how objects of that class should be created and what they can do.*/


class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    sayHello() {
        //console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);


//In object-oriented programming, methods are functions associated with objects, and you call them using the object followed by a dot (.) and the method name.
person1.sayHello()
person2.sayHello()

//2: with for method
class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
    }

    perimeter() {
        let sum = 0;
        for (let i = 0; i < this.sideLengths.length; i++) {
            sum += this.sideLengths[i];
        }
        return sum;
    }
}
const triangle = new Polygon([3, 4, 5]);
const square = new Polygon([4, 4, 4, 4]);

//console.log(triangle.perimeter()); // Output: 12
//console.log(square.perimeter());   // Output: 16

//with reduce method:
/*class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
    }

    perimeter() {
        // Calculate the sum of the side lengths
        const sum = this.sideLengths.reduce((total, length) => total + length, 0);
        return sum;
    }
}*/


