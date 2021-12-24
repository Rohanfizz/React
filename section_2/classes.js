// check out next gen version classes for updated classes
class Human{
    constructor(gender){
        this.gender = gender?gender:'Female';
    }
    printMyGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(name,gender){
        super(gender)
        this.name = name;
    }
    printMyName(){
        console.log(this.name);
    }
}

const me = new Person('Rohan','Male');
me.printMyName();
me.printMyGender();