{

    // Generic type  

    type GenericArray<T> = Array<T>

    // const roolNumbers : number [] = [2,3,4,5,6,]
    const roolNumbers: GenericArray<number> = [2, 3, 4, 5, 6,]

    // const mentors : string[] = ['bappy','omor','khalid']
    const mentors: GenericArray<string> = ['bappy', 'omor', 'khalid']

    // const boolArray : boolean [] = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    interface User {
        name : string,
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: 'bappy',
            age: 100
        },
        {
            name: 'Mahmud',
            age: 234,
        },
        
    ]

    // Generic tuple 

    type GenericTuple<x,y> = [x,y]
    const manush : [string, string] = ['bappy', 'mahmud']

    const userWithId : GenericTuple<number, {name: string, email: string}> = [123, {name : 'bappy', email: 'dadwd@.com'}]

}