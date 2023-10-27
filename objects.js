/*Objects. Iterations over an object.
What is an object in JS? -- is a fundamental data type and one of the most important concepts in the language. An object is a collection of key-value pairs, where each key is a unique identifier. Obj are used to represent and structure data in JS and they provide a way to group related data and funtionality together.
Example:*/
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
}

//Iterations over an object:
//1) for...in loop -- over all non-Symbol iterable properties of an obj. 
//The hasOwnProperty() - can be used to check if the property belongs to the obj itself. The value of each key can be found by using the key as the index of the obj.:
for (let key in person){
    if(person.hasOwnProperty(key)){
        value = person[key]
        //console.log(key, value)
    }
}
//2) Object.entries() method and map():
//the Object.entries() method is used to return an array of the object¨s own enumerable string-keyed property pairs. The returned value is used with the map() method to extract the key and value from the pairs. The key and values from the key-value pair can be extracted by accessing the first and the second index of the array pair. The first index corresponds to the key and the second index corresponds to the value of the pair.
Object.entries(person).map(entry => {
    let key = entry[0]
    let value = entry[1]
    //console.log(key, value)
})

//3)forEach() method and object.keys() method
//object.keys() returns an array of keys of the object and forEach() is an array method that allows you to iterate over each element in the array.
Object.keys(person).forEach(key => {
    const value = person[key]
    //console.log(`${key}: ${value}`) 
})



//HackerRank/ array of objects
/*Complete the function in the editor. It has one parameter: an array, a , of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array  that satisfy o,x == o,y. 
Input Format
The first line contains an integer denoting n.
Each of the n subsequent lines contains two space - separated integers describing the values of x and y.*/

let n = [
        {x: 1, y: 1},
        {x: 2, y: 3},
        {x: 3, y: 3},
        {x: 3, y: 4},
        {x: 4, y: 5}

    ]
//forEach:
function getCount(objects) {
    let count = 0
    objects.forEach(obj => {
        if(obj.x == obj.y){ //uses the key(obj) as the element itself, not as an index to access the obj properties
            count++
        }
    })
    return count
}
//console.log(getCount(n))
//for loop:
const countObj = (objects) =>{
let count = 0
for(let i = 0; i < objects.length; i++){
    if(objects[i].x == objects[i].y){
        count++
    }
}
return count
}
//console.log(countObj(n))

//for...in -- iterates over the keys(property names) of an object, not the element of an array.
//for...of
const objCount = (objects) => {
    let count = 0
    for(let obj of objects){
        if(obj.x == obj.y){
            count ++
        }
    }
    return count
}
//console.log(objCount(n))

