<template>
    <v-container fluid>
        <!--
        <v-row dense>
            <v-col v-for="(card, index) in todo" :key="card.count">
                <v-card
                    class="mx-auto"
                    max-width="500"
                    min-width="344"
                    elevation="4"
                    outlined
                >
                    <v-card-title>To Do List {{ card.count }}</v-card-title>
                    <v-card-text>{{ card.task }}</v-card-text>
                    <v-card-actions>
                        <v-icon
                            @click="deleteToDo(index)"
                            class="ml-2 mb-2"
                            color="blue"
                        >
                            mdi-delete
                        </v-icon>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        -->
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ItemsCard',
    data() {
        return {
        };
    },
    props: {
        items: {
            type: Array,
        },
    },
    methods: {
    },
    computed: {},
});
</script>

<style scoped></style>