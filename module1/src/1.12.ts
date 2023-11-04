{

// nullable type / unknown type

const searchName = (value :string | null ) => {
    if(value) {
        console.log('seatching');
    }
    else{
        console.log('there is nothing to search');
    }
} 
searchName(null)

// unknown typeof

const getSpeedInMeterPerSecond = (value : unknown)=> {
    if(typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 3600 ;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }

    else if( typeof value === 'string'){
        const [result, unit] = value.split(' ');
        const convertedSpeed = (parseFloat(result) * 1000) / 3600 ;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }

    else {
        console.log('wrong input');
    }
}
getSpeedInMeterPerSecond(`100 kmh^-1`)


const throwerror = (msg : string) : never => {
    throw new Error(msg)
}
throwerror("error hogaya")


 










}