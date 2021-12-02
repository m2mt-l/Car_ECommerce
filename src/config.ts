interface Config {
    model: {
        [key: string]: {
            name: string;
            img: string;
            category: string;
            price: number;
            date: number[];
        };
    };
    category: {
        [key: string]: string;
    };
    sort: {
        [key: string]: string;
    };
}

const config: Config = {
    model: {
        model3: {
            name: 'Model 3',
            img: '@/assets/model3.jpeg',
            category: 'Tesla',
            price: 48490,
            date: [2020, 9, 4],
        },

        modelX: {
            name: 'Model X',
            img: '@/assets/modelx.jpeg',
            category: 'Tesla',
            price: 89990,
            date: [2017, 8, 8],
        },

        modelS: {
            name: 'Model S',
            img: '@/assets/models.jpeg',
            category: 'Tesla',
            price: 82990,
            date: [2019, 4, 1],
        },

        modelY: {
            name: 'Model Y',
            img: '@/assets/modely.jpeg',
            category: 'Tesla',
            price: 48190,
            date: [2020, 2, 2],
        },

        cayenne: {
            name: 'Cayenne',
            img: '@/assets/Cayenne.jpeg',
            category: 'Porsche',
            price: 67500,
            date: [2017, 12, 20],
        },

        macan: {
            name: 'Macan',
            img: '@/assets/Macan.jpeg',
            category: 'Porsche',
            price: 52100,
            date: [2019, 7, 12],
        },

        camry: {
            name: 'Camry',
            img: '@/assets/Camry.jpeg',
            category: 'Toyota',
            price: 24425,
            date: [2015, 6, 29],
        },

        accord: {
            name: 'Accord',
            img: '@/assets/Accord.jpeg',
            category: 'Honda',
            price: 24800,
            date: [2018, 10, 2],
        },

        civic: {
            name: 'Civic',
            img: '@/assets/Civic.jpeg',
            category: 'Honda',
            price: 20650,
            date: [2015, 4, 4],
        },

        cx5: {
            name: 'CX-5',
            img: '@/assets/CX-5.jpeg',
            category: 'Mazda',
            price: 26940,
            date: [2012, 11, 3],
        },

        gleCoupe: {
            name: 'GLE Coupe',
            img: '@/assets/GLECoupe.jpeg',
            category: 'Mercedes-Benz',
            price: 76500,
            date: [2020, 2, 5],
        },

        cla: {
            name: 'CLA',
            img: '@/assets/CLA.jpeg',
            category: 'Mercedes-Benz',
            price: 37850,
            date: [2019, 6, 9],
        },

        gla250: {
            name: 'GLA 250',
            img: '@/assets/GLA250.jpeg',
            category: 'Mercedes-Benz',
            price: 37280,
            date: [2017, 5, 2],
        },

        rx350: {
            name: 'RX 350',
            img: '@/assets/RX350.jpeg',
            category: 'Lexus',
            price: 45175,
            date: [2015, 1, 1],
        },

        nx300: {
            name: 'NX 300',
            img: '@/assets/NX300.jpeg',
            category: 'Lexus',
            price: 37510,
            date: [2018, 9, 12],
        },

        urus: {
            name: 'Urus',
            img: '@/assets/Urus.jpeg',
            category: 'Lamborghini',
            price: 218000,
            date: [2021, 8, 16],
        },

        aventador: {
            name: 'Aventador',
            img: '@/assets/Aventador.jpeg',
            category: 'Lamborghini',
            price: 393695,
            date: [2020, 9, 11],
        },

        a3: {
            name: 'A3',
            img: '@/assets/A3.jpeg',
            category: 'Audi',
            price: 33500,
            date: [2019, 5, 8],
        },

        x3: {
            name: 'X3',
            img: '@/assets/X3.jpeg',
            category: 'BMW',
            price: 43000,
            date: [2018, 3, 11],
        },

        series2: {
            name: '2 Series',
            img: '@/assets/2Series.jpeg',
            category: 'BMW',
            price: 37500,
            date: [2019, 1, 15],
        },
    },

    category: {
        tesla: 'Tesla',
        porsche: 'Porsche',
        toyota: 'Toyota',
        honda: 'Honda',
        mazda: 'Mazda',
        mercedes: 'Mercedes-Benz',
        lexus: 'Lexus',
        lamborghini: 'Lamborghini',
        audi: 'Audi',
        bmw: 'BMW',
    },

    sort: {
        priceLowHigh: 'Price: Low to High',
        priceHighLow: 'Price: High to Low',
        newestArrivals: 'Newest Arrivals',
    },
};

export default config;
