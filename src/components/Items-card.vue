<template>
    <v-container fluid>
        <v-row dense>
            <v-col v-for="car in items" :key="car.name">
                <v-card class="mx-auto" max-width="500" min-width="344" elevation="4" outlined>
                    <v-card-title>{{ car.name }}</v-card-title>
                    <v-img height="250" :src="getImgPath()"></v-img>
                    <v-card-text>Category: {{ car.category }}</v-card-text>
                    <v-card-text>Price: ${{ car.price }}</v-card-text>
                    <v-card-text
                        >Date:
                        {{ car.date[0] + '-' + car.date[1] + '-' + car.date[2] }}</v-card-text
                    >
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ItemsCard',
    data() {
        return {};
    },
    props: {
        items: {
            type: Array,
        },
    },
    methods: {
        getImgPath(): string{
            const img = '@/assets/model3.jpeg'
            return require('@/assets/model3.jpeg');
        }
    },
    computed: {
        
    },
});
</script>

<style scoped></style>
