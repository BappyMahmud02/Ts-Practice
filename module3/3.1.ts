{

// oop -class

class Animal { 

//    parameter 

 constructor(public name : string, public species : string,public sound: string ){}

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('German shephard', 'dog', 'gheu gheu')
const cat = new Animal('parsian', 'cat', 'mew mew')
cat.makeSound()



















}