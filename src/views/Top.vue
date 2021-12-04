<template>
    <v-container>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
                <v-select
                    v-model="selectedCategory"
                    :items="category"
                    label="Category"
                    dense
                    solo
                ></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
                <v-select
                    v-model="selectedSort"
                    :items="sort"
                    label="Sort by:"
                    dense
                    solo
                ></v-select>
            </v-col>
        </v-row>
        <ItemsCard :items="sortedCars" />
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Config from '../config';
import ItemsCard from '../components/Items-card.vue';
import Car from '../models/car';

export default Vue.extend({
    name: 'Top',
    components: {
        ItemsCard,
    },
    data() {
        return {
            category: [
                Config.category.tesla,
                Config.category.porsche,
                Config.category.toyota,
                Config.category.honda,
                Config.category.mazda,
                Config.category.mercedes,
                Config.category.lexus,
                Config.category.lamborghini,
                Config.category.audi,
                Config.category.bmw,
            ] as Array<string>,
            sort: [
                Config.sort.priceLowHigh,
                Config.sort.priceHighLow,
                Config.sort.newestArrivals,
            ] as Array<string>,
            cars: [] as Array<Car>,
            selectedCategory: '' as string,
            selectedSort: '' as string,
        };
    },
    created: function () {
        this.createCars();
    },

    methods: {
        createCars(): void {
            this.cars.push(
                new Car(
                    Config.model.model3.name,
                    Config.model.model3.img,
                    Config.model.model3.category,
                    Config.model.model3.price,
                    Config.model.model3.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.modelX.name,
                    Config.model.modelX.img,
                    Config.model.modelX.category,
                    Config.model.modelX.price,
                    Config.model.modelX.date
                )
            );

            this.cars.push(
                new Car(
                    Config.model.modelS.name,
                    Config.model.modelS.img,
                    Config.model.modelS.category,
                    Config.model.modelS.price,
                    Config.model.modelS.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.modelY.name,
                    Config.model.modelY.img,
                    Config.model.modelY.category,
                    Config.model.modelY.price,
                    Config.model.modelY.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.cayenne.name,
                    Config.model.cayenne.img,
                    Config.model.cayenne.category,
                    Config.model.cayenne.price,
                    Config.model.cayenne.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.macan.name,
                    Config.model.macan.img,
                    Config.model.macan.category,
                    Config.model.macan.price,
                    Config.model.macan.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.camry.name,
                    Config.model.camry.img,
                    Config.model.camry.category,
                    Config.model.camry.price,
                    Config.model.camry.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.accord.name,
                    Config.model.accord.img,
                    Config.model.accord.category,
                    Config.model.accord.price,
                    Config.model.accord.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.civic.name,
                    Config.model.civic.img,
                    Config.model.civic.category,
                    Config.model.civic.price,
                    Config.model.civic.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.cx5.name,
                    Config.model.cx5.img,
                    Config.model.cx5.category,
                    Config.model.cx5.price,
                    Config.model.cx5.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.gleCoupe.name,
                    Config.model.gleCoupe.img,
                    Config.model.gleCoupe.category,
                    Config.model.gleCoupe.price,
                    Config.model.gleCoupe.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.cla.name,
                    Config.model.cla.img,
                    Config.model.cla.category,
                    Config.model.cla.price,
                    Config.model.cla.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.gla250.name,
                    Config.model.gla250.img,
                    Config.model.gla250.category,
                    Config.model.gla250.price,
                    Config.model.gla250.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.rx350.name,
                    Config.model.rx350.img,
                    Config.model.rx350.category,
                    Config.model.rx350.price,
                    Config.model.rx350.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.nx300.name,
                    Config.model.nx300.img,
                    Config.model.nx300.category,
                    Config.model.nx300.price,
                    Config.model.nx300.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.urus.name,
                    Config.model.urus.img,
                    Config.model.urus.category,
                    Config.model.urus.price,
                    Config.model.urus.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.aventador.name,
                    Config.model.aventador.img,
                    Config.model.aventador.category,
                    Config.model.aventador.price,
                    Config.model.aventador.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.a3.name,
                    Config.model.a3.img,
                    Config.model.a3.category,
                    Config.model.a3.price,
                    Config.model.a3.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.x3.name,
                    Config.model.x3.img,
                    Config.model.x3.category,
                    Config.model.x3.price,
                    Config.model.x3.date
                )
            );
            this.cars.push(
                new Car(
                    Config.model.series2.name,
                    Config.model.series2.img,
                    Config.model.series2.category,
                    Config.model.series2.price,
                    Config.model.series2.date
                )
            );
        },
    },
    computed: {
        extractCars(): Car[] {
            if (this.selectedCategory === '') return this.cars;
            let cars: Car[] = [];
            this.cars.forEach((car: Car) => {
                if (car.category === this.selectedCategory) {
                    cars.push(car);
                }
            });
            return cars;
        },

        sortedCars(): Car[] {
            let cars: Car[] = [];
            this.extractCars.forEach((car: Car) => {
                cars.push(car);
            });
            switch (this.selectedSort) {
                case Config.sort.priceLowHigh:
                    return cars.sort((a: Car, b: Car) => a.price - b.price);
                case Config.sort.priceHighLow:
                    return cars.sort((a: Car, b: Car) => b.price - a.price);
                case Config.sort.newestArrivals:
                    return cars.sort((a: Car, b: Car) =>
                        new Date(a.date[0], a.date[1], a.date[2]) <
                        new Date(b.date[0], b.date[1], b.date[2])
                            ? 1
                            : -1
                    );
                default:
                    return this.extractCars;
            }
        },
    },
});
</script>

<style scoped></style>
