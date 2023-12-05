class Person{
    constructor(name, age, gender, email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    displayDetails(){
        console.log(`Name : ${this.name}`)
        console.log(`Age : ${this.age}`)
        console.log(`Gender : ${this.gender}`)
        console.log(`Email : ${this.email}`)
    }

    //Getter and setter for individual properties
    getName(){
        return this.name
    }

    setName(){
        this.name = newName;
    }

    getAge(){
        return this.age;
    }

    setAge(){
        this.age = newAge;
    }

    getGender(){
        return this.gender
    }

    setGender(){
        this.gender = newGender
    }

    getEmail(){
        return this.email
    }

    setEmail(){
        this.email = newEmail;
    }
}

const Person1 = new Person("Syed Shamsher Ali", 26, "Male", "be15ec5@global.org.in")

//Accessing and displaying details 
Person1.displayDetails();

//Modifying details
Person1.setName("Syed Sharib Ali")
Person1.setEmail("syedshamsher9174@gmail.com")

//displaying modified details
Person1.displayDetails();