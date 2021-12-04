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

    imgData: {
        [key: string]: string;
    };
}

const config: Config = {
    model: {
        model3: {
            name: 'Model 3',
            img: require('@/assets/model3.jpeg'),
            category: 'Tesla',
            price: 48490,
            date: [2020, 9, 4],
        },

        modelX: {
            name: 'Model X',
            img: require('@/assets/modelx.jpeg'),
            category: 'Tesla',
            price: 89990,
            date: [2017, 8, 8],
        },

        modelS: {
            name: 'Model S',
            img: require('@/assets/models.jpeg'),
            category: 'Tesla',
            price: 82990,
            date: [2019, 4, 1],
        },

        modelY: {
            name: 'Model Y',
            img: require('@/assets/modelx.jpeg'),
            category: 'Tesla',
            price: 48190,
            date: [2020, 2, 2],
        },

        cayenne: {
            name: 'Cayenne',
            img: require('@/assets/Cayenne.jpeg'),
            category: 'Porsche',
            price: 67500,
            date: [2017, 12, 20],
        },

        macan: {
            name: 'Macan',
            img: require('@/assets/Macan.jpeg'),
            category: 'Porsche',
            price: 52100,
            date: [2019, 7, 12],
        },

        camry: {
            name: 'Camry',
            img: require('@/assets/Camry.jpeg'),
            category: 'Toyota',
            price: 24425,
            date: [2015, 6, 29],
        },

        accord: {
            name: 'Accord',
            img: require('@/assets/Accord.jpeg'),
            category: 'Honda',
            price: 24800,
            date: [2018, 10, 2],
        },

        civic: {
            name: 'Civic',
            img: require('@/assets/Civic.jpeg'),
            category: 'Honda',
            price: 20650,
            date: [2015, 4, 4],
        },

        cx5: {
            name: 'CX-5',
            img: require('@/assets/CX-5.jpeg'),
            category: 'Mazda',
            price: 26940,
            date: [2012, 11, 3],
        },

        gleCoupe: {
            name: 'GLE Coupe',
            img: require('@/assets/GLECoupe.jpeg'),
            category: 'Mercedes-Benz',
            price: 76500,
            date: [2020, 2, 5],
        },

        cla: {
            name: 'CLA',
            img: require('@/assets/CLA.jpeg'),
            category: 'Mercedes-Benz',
            price: 37850,
            date: [2019, 6, 9],
        },

        gla250: {
            name: 'GLA 250',
            img: require('@/assets/GLA250.jpeg'),
            category: 'Mercedes-Benz',
            price: 37280,
            date: [2017, 5, 2],
        },

        rx350: {
            name: 'RX 350',
            img: require('@/assets/RX350.jpeg'),
            category: 'Lexus',
            price: 45175,
            date: [2015, 1, 1],
        },

        nx300: {
            name: 'NX 300',
            img: require('@/assets/NX300.jpeg'),
            category: 'Lexus',
            price: 37510,
            date: [2018, 9, 12],
        },

        urus: {
            name: 'Urus',
            img: require('@/assets/Urus.jpeg'),
            category: 'Lamborghini',
            price: 218000,
            date: [2021, 8, 16],
        },

        aventador: {
            name: 'Aventador',
            img: require('@/assets/Aventador.jpeg'),
            category: 'Lamborghini',
            price: 393695,
            date: [2020, 9, 11],
        },

        a3: {
            name: 'A3',
            img: require('@/assets/A3.jpeg'),
            category: 'Audi',
            price: 33500,
            date: [2019, 5, 8],
        },

        x3: {
            name: 'X3',
            img: require('@/assets/X3.jpeg'),
            category: 'BMW',
            price: 43000,
            date: [2018, 3, 11],
        },

        series2: {
            name: '2 Series',
            img: require('@/assets/2Series.jpeg'),
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

    imgData: {
        model3: require('@/assets/model3.jpeg'),
        modelX: require('@/assets/modelx.jpeg'),
        modelS: require('@/assets/models.jpeg'),
        modelY: require('@/assets/modely.jpeg'),
        cayenne: require('@/assets/Cayenne.jpeg'),
        macan: require('@/assets/Macan.jpeg'),
        camry: require('@/assets/Camry.jpeg'),
        accord: require('@/assets/Accord.jpeg'),
        civic: require('@/assets/Civic.jpeg'),
        cx5: require('@/assets/CX-5.jpeg'),
        gleCoupe: require('@/assets/GLECoupe.jpeg'),
        cla: require('@/assets/CLA.jpeg'),
        gla250: require('@/assets/GLA250.jpeg'),
        rx350: require('@/assets/RX350.jpeg'),
        nx300: require('@/assets/NX300.jpeg'),
        urus: require('@/assets/Urus.jpeg'),
        aventador: require('@/assets/Aventador.jpeg'),
        a3: require('@/assets/A3.jpeg'),
        x3: require('@/assets/X3.jpeg'),
        series2: require('@/assets/2Series.jpeg'),
    },
};

export default config;
