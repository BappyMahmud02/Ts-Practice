{

    // generic conrtaraint with keyOF operator


    type vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship' //manually

    type Owner2 = keyof vehicle


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'bappy',
        age: 213,
        adress: 'dhk',
    }
    const car = {
        model: 'toyota',
        year: 34,
        
    }


    const result1 = getPropertyValue(car, 'model')
























}