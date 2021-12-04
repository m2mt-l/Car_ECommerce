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
import CreateCars from '../modules/createCars';

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
        CreateCars.createInitialCars(this.cars);
    },

    methods: {},
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
