<template>
    <div id="info-container" v-if="state.kind === 'LoadingProductsState'">
        <ProgressSpinner />
    </div>
    <div id="info-container" v-if="state.kind === 'ErrorProductsState'">Error</div>
    <div id="products-container" idv-if="state.kind === 'LoadedProductsState'">
        <h2>Results for "{{ state.searchTerm }}"</h2>

        <div class="p-grid">
            <div
                class="p-col-6 p-md-4 p-lg-3 p-xl-2"
                v-for="product in state.products"
                v-bind:key="product.id"
            >
                <ProductItem v-bind="product" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dependenciesLocator } from "@frontend-clean-architecture/core";
import { usePlocState } from "../common/usePlocState";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
    components: {
        ProductItem,
    },
    props: {
        searchTerm: {
            type: String,
            required: true,
        },
    },
    setup(props) {
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
#products-container {
    padding: 16px;
}
#info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
