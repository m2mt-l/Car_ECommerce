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
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Config from '../config';
import ItemsCard from '../components/Items-card.vue'

export default Vue.extend({
    name: 'Top',
    components: {},
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
        };
    },
    methods: {},
    computed: {},
});
</script>

<style scoped></style>
