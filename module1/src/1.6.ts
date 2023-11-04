{
// learning function 
// normal function 
// arrow function 

// function add(num1: number, num2: number = 10): number {
//    return  num1 + num2;
// }
// add(2, 2)

const addArrow = (num1 : number, num2: number) : number => num1 + num2 ;


// object function method

const poorUSer = {
    name: 'Bappy',
    balance: 0,
    addBalance(balance: number) : string {
        return `My new balance is: ${this.balance + balance}`
    }
}

const arr : number[] = [1,2,3,4]

const newArry: number[] = arr.map((elem: number) : number => elem * elem) 



}