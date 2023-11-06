{

    // utility type 
    // pick 


    type person = {
        name: string;
        age: number;
        email?: string;
        contact: string
    }

    type nameAge = Pick<person, 'name' | 'age'>

    // omit

    type ContactInfo = Omit<person, 'name' | 'age'>

    // require 

    type personRequired = Required<person>

    // partial 

    type personPartial = Partial<person>

    // readonly

    type personReadOnly = Readonly<person>
    const person1: person = {
        name: 'bappy',
        age: 20,
        contactNo: '028'


    }
    person1.name = 'bappy'


    // record type 

    // type MyObj = {
    //     a: string;
    //     b: string ;
    // }


    type MyObj = Record<string, string>
    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc'
    }








}