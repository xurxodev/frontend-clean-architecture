<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <ProductList searchTerm="Element" />
    </div>
</template>

<script lang="ts">
import { dependenciesLocator } from "@frontend-clean-architecture/core";
import { defineComponent } from "vue";
import ProductList from "./products/ProductList.vue";

export default defineComponent({
    name: "App",
    components: {
        ProductList,
    },
    provide: {
        cartPloc: dependenciesLocator.provideCartPloc(),
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
