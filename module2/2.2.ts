{

    // interface  

    type User1 = {
        name: string,
        age: number
    }

    interface User2 {
        name: string,
        age: number,
    }


    type userWithRoll = User1 & { role: string };
    interface userWithRoll2 extends User1 {
        role: string

    }

    const user1: userWithRoll = {
        name: ' bappy',
        age: 23,
        role: 'manager',
    }

    // js --> array interface ------>>

    type Roll = number[] ;

    interface Roll2 {
        [index : number] : number
    }
    const rollNumber : Roll = [1,2,3,4,]
                
    type Add1 = (num1 : number , num2 : number) => number
    
    interface Add2 {
        (num1 : number, num2 : number) : number
    }

    const add : Add1 = (num1 :number , num2 : number) => num1 + num2 











}