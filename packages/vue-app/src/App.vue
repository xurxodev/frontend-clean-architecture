<template>
    <div id="app">
        <MyAppBar />
        <ProductList searchTerm="Element" />
        <CartSidebar />
    </div>
</template>

<script lang="ts">
import { dependenciesLocator } from "@frontend-clean-architecture/core";
import { defineComponent } from "vue";
import MyAppBar from "./appbar/MyAppBar.vue";
import ProductList from "./products/ProductList.vue";
import CartSidebar from "./cart/CartSidebar.vue";

export default defineComponent({
    name: "App",
    components: {
        ProductList,
        MyAppBar,
        CartSidebar,
    },
    provide: {
        cartPloc: dependenciesLocator.provideCartPloc(),
    },
});
</script>
