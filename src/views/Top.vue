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
import ItemsCard from '../components/Items-card.vue'

export default Vue.extend({
    name: 'Top',
    components: {},
    data() {
        return {
            category: [
                'Tesla',
                'Porsche',
                'Toyota',
                'Honda',
                'Mazda',
                'Mercedes-Benz',
                'Lexus',
                'Lamborghini',
                'Audi',
                'BMW',
            ],
            sort: ['Price: Low to High', 'Price: High to Low', 'Newest Arrivals'],
        };
    },
    methods: {},
    computed: {},
});
</script>

<style scoped></style>
