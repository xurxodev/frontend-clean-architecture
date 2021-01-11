<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <Products msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Products from "./products/Products.vue";

export default defineComponent({
    name: "App",
    components: {
        Products,
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
