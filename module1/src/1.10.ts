{

    // union types 

    // type FrontendDeveloper = 'fakibajDeveloper' | 'juniorDeveloper'
    // type FullStackDeveloper = 'frontendDeveloper' | 'ExpertDeveloper'

    // type Developer = FrontendDeveloper | FullStackDeveloper ;
    // const newDeveloper: FrontendDeveloper = 'fakibajDeveloper'


    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: 'male' | 'female';
    //     blood: 'B+' | 'O+' | 'A+';
    // }

    // const user1: User = {
    //     name: 'Bappy',
    //     gender: 'male',
    //     blood: 'B+'
    // }


    type FrontendDeveloper = {
        skills: string[];
        designation1: 'FrontendDeveloper'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'BackendDeveloper'
    }
    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper
    const fullstackdeveloper: FullStackDeveloper = {
        skills: ['Html', 'Css', 'React'],
        designation1: 'FrontendDeveloper',
        designation2: 'BackendDeveloper',
    }




















}