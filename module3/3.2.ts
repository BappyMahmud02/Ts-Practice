{

    // oop inheritence 

    class Parent {
        name: string;
        age: number;
        adress: string;


        constructor(name: string, age: number, adress: string) {
            this.name = name;
            this.age = age;
            this.adress = adress;

        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Parent {

        constructor(name: string, age: number, adress: string) {
            super(name, age, adress)
        }


    }

    const student1 = new Student('bappy', 20, 'bangladesh ')

    student1.name


    class Teacher extends Parent{
        designation: string


        constructor(name: string, age: number, adress: string, designation: string) {
            super(name, age, adress)
            this.designation = designation;

        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }

    const teacher = new Teacher('bappy', 20, 'bangladesh ', 'professor')
    
    teacher.name








}