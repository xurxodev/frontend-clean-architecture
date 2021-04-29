<template>
    <div id="products">
        <h2>Results for "{{ state.searchTerm }}"</h2>

        <!-- https://github.com/kevinrodriguez-io/vue-bloc-state-management/blob/master/src/components/Todos.vue -->
        <div id="products-content">
            <div v-if="state.kind === 'LoadingProductsState'">Loading</div>
            <div v-if="state.kind === 'LoadedProductsState'">
                <ul>
                    <li v-for="product in state.products" v-bind:key="product.id">
                        {{ product.title }}
                    </li>
                </ul>
            </div>
            <div v-if="state.kind === 'ErrorProductsState'">Error</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dependenciesLocator } from "@frontend-clean-architecture/core";
import { usePlocState } from "../common/usePlocState";

export default defineComponent({
    //inject: ["productsPloc"],
    props: {
        searchTerm: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        //const productsPloc = inject<ProductsPloc>("productsPloc") as ProductsPloc;
        const ploc = dependenciesLocator.provideProductsPloc();
        const state = usePlocState(ploc);

        onMounted(() => {
            ploc.search(props.searchTerm);
        });

        return { state };
    },
});
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 10px 0px;
}
a {
    color: #42b983;
}
</style>
