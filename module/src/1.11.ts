{
    // tarnary operator || optional chaining || nullish coalescing operator 


    const age: number = 16

    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log("not adult");
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({isAdult});

    // nullish operator 

    const isAuthenticated = null
    const result1 = isAuthenticated ?? 'guest'
    const result2 = isAuthenticated? isAuthenticated : 'Guest';
    console.log({result1}, {result2});


    type User = {
        name : string;
        address : {
            city: string,
            road: string,
            parmanentAdress?: string,
            presentAdress: string
        }
    } 

    const user : User = {
        name: 'bappy',
        address : {
            city: "dhaka",
            road: "12",
             presentAdress: "dha",
        }
    }
    const parmanentAdress = user?.address?.parmanentAdress ?? 'No adress'
    console.log(parmanentAdress);



























}