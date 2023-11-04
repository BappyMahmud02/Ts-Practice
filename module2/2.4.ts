{

    // Generic with interface

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T
    }

    const poorDeveloper: Developer<{
        brand: string,
        model: string,
        display: string;
    }> = {
        name: 'poor dev',
        computer: {
            brand: 'HP',
            model: 'x7j',
            releaseYear: 2913,

        }
    smartWatch : {
            brand: 'Rolex',
            model: '34',
            display: 'Emulet',
        }


    }

    const richDeveloper: Developer<{
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack : boolean,
    }> = {
        name: 'rich Dev',
        computer: {
            brand: 'apple',
            model: '15pro',
            releaseYear: 2123

        }
    smartWatch: {
            brand: 'Apple Watch ex',
            model: '100',
            heartTrack: true,
            sleepTrack: true,
        }


    }




}