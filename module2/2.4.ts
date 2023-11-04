{

    // Generic with interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T ;
        bike?: X  ;
    }

    type Rolex = {
        brand: string,
        model: string,
        display: string,
       
    }

    const poorDeveloper: Developer<Rolex> = {
        name: 'poor dev',
        computer: {
            brand: 'HP',
            model: 'x7j',
            releaseYear: 2913,

        },
        smartWatch: {
            brand: 'Rolex',
            model: '34',
            display: 'Emulet',
        }


    }



    interface AppleWatch {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean,
    }

    interface yahamaha {
        model : string,
        enginCapacity : string 
    }

    const richDeveloper: Developer<AppleWatch, yahamaha> = {
        name: 'rich Dev',
        computer: {
            brand: 'apple',
            model: '15pro',
            releaseYear: 2123

        },
        smartWatch: {
            brand: 'Apple Watch ex',
            model: '100',
            heartTrack: true,
            sleepTrack: true,
        },
        bike :{
            model :'yamaha',
            enginCapacity: '100cc' 
        }


    }




}