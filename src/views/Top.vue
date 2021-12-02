<template>
    <v-container>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="category" label="Category" dense solo></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="sort" label="Sort by:" dense solo></v-select>
            </v-col>
        </v-row>
        <ItemsCard :items="cars" />
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
            ],
            sort: [Config.sort.priceLowHigh, Config.sort.priceHighLow, Config.sort.newestArrivals],
            cars: [] as Array<Car>,
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
        },
    },
    computed: {},
});
</script>

<style scoped></style>
