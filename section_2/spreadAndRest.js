let arr = [1,2,3];

let newArr = [...arr,4,5];

console.log(arr);
console.log(newArr);


// on objects

let person = {
    name : 'Rohan'
};

let newPerson = {
    ...person,
    age: 30
}

console.log(person);
console.log(newPerson);

// REST     

const filter = (...args) =>{
    return args.filter(element => element === 1);
}
console.log(filter(1,2,3));