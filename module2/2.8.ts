{

// promise



// simulate
const createPromise  =(): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data : string = 'simething' 
        if(data){
            resolve(data)
        }
        else{
            reject('failed to load data')
        }
    })
}

// calling create promise data

const showData = async() => {
    const data : string = await createPromise()
    console.log(data);
}
showData()













}