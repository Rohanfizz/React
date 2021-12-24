const person = {
    name:'Max'
};

//  secondPerson = person;  (incorrect)

const secondPerson = {    //(correct)
    ...person
}

person.name = 'John';

console.log(person);
console.log(secondPerson);