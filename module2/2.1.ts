{

// type assertion 
let anything : any
anything = 'web Dev' ;

anything = 222 ;
(anything as number)


const kgToGm = (value : string | number) : string | number | undefined => {
    if(typeof value === 'string') {
        const converted = parseFloat(value) * 1000 ;
        return `The converted value is : ${converted}`
    }
    if(typeof value === 'number') {
        return value * 1000
    }
}

const result1 = kgToGm(1000) as number
const result2 = kgToGm('1000')


type customError = {
    message: string
}
try{

}catch(error){
    console.log((error as customError).message) ;
}




}


