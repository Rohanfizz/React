class Human{
    gender = 'Male';
    printMyGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    // (name,gender)

    name = 'Rohan';

    printMyName = () => {
        console.log(this.name);
    }
}

const me = new Person();
me.printMyName();
me.printMyGender();