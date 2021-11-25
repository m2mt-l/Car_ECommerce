interface Config {
    model: {
        [key: string]: {
            name: string;
            category: string;
            price: number;
            date: number[];
        };
    };
}

const config: Config = {
    model: {
        model3: {
            name: 'Model 3',
            category: 'Tesla',
            price: 48490,
            date: [2020, 9, 4],
        },

        modelX: {
            name: 'Model X',
            category: 'Tesla',
            price: 89990,
            date: [2017, 8, 8],
        },

        modelS: {
            name: 'Model S',
            category: 'Tesla',
            price: 82990,
            date: [2019, 4, 1],
        },

        modelY: {
            name: 'Model Y',
            category: 'Tesla',
            price: 48190,
            date: [2020, 2, 2],
        },

        cayenne: {
            name: 'Cayenne',
            category: 'Porsche',
            price: 67500,
            date: [2017, 12, 20],
        },

        macan: {
            name: 'Macan',
            category: 'Porsche',
            price: 52100,
            date: [2019, 7, 12],
        },

        camry: {
            name: 'Camry',
            category: 'Toyota',
            price: 24425,
            date: [2015, 6, 29],
        },

        accord: {
            name: 'Accord',
            category: 'Honda',
            price: 24800,
            date: [2018, 10, 2],
        },

        civic: {
            name: 'Civic',
            category: 'Honda',
            price: 20650,
            date: [2015, 4, 4],
        },

        cx5: {
            name: 'CX-5',
            category: 'Mazda',
            price: 26940,
            date: [2012, 11, 3],
        },

        gleCoupe: {
            name: 'GLE Coupe',
            category: 'Mercedes-Benz',
            price: 76500,
            date: [2020, 2, 5],
        },

        cla: {
            name: 'CLA',
            category: 'Mercedes-Benz',
            price: 37850,
            date: [2019, 6, 9],
        },

        gla250: {
            name: 'GLA 250',
            category: 'Mercedes-Benz',
            price: 37280,
            date: [2017, 5, 2],
        },

        rx350: {
            name: 'RX 350',
            category: 'Lexus',
            price: 45175,
            date: [2015, 1, 1],
        },

        nx300: {
            name: 'NX 300',
            category: 'Lexus',
            price: 37510,
            date: [2018, 9, 12],
        },

        urus: {
            name: 'Urus',
            category: 'Lamborghini',
            price: 218000,
            date: [2021, 8, 16],
        },

        aventador: {
            name: 'Aventador',
            category: 'Lamborghini',
            price: 393695,
            date: [2020, 9, 11],
        },

        a3: {
            name: 'A3',
            category: 'Audi',
            price: 33500,
            date: [2019, 5, 8],
        },

        x3: {
            name: 'X3',
            category: 'BMW',
            price: 43000,
            date: [2018, 3, 11],
        },

        series2: {
            name: '2 Series',
            category: 'BMW',
            price: 37500,
            date: [2019, 1, 15],
        },
    },
};

export default Config;
