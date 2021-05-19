<template>
    <div id="info-container" v-if="state.kind === 'LoadingCartState'">
        <ProgressSpinner />
    </div>
    <div id="info-container" v-if="state.kind === 'ErrorCartState'">Error</div>
    <div id="items-container" v-if="state.kind === 'UpdatedCartState'">
        <div v-if="state.items.length > 0" style="max-height: 650px; overflow: scroll">
            <div v-for="item in state.items" v-bind:key="item.id">
                <CartContenttItem v-bind="item" />
            </div>
        </div>
        <h2 v-if="state.items.length === 0">Empty Cart :(</h2>
    </div>
    <Divider />
    <div id="total-price-container">
        <h3>Total Price</h3>
        <h3>{{ state.totalPrice }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { CartPloc } from "@frontend-clean-architecture/core";
import { usePlocState } from "../common/usePlocState";
import CartContenttItem from "./CartContenttItem.vue";

export default defineComponent({
    components: {
        CartContenttItem,
    },
    setup() {
        const ploc = inject<CartPloc>("cartPloc") as CartPloc;
        const state = usePlocState(ploc);

        return { state };
    },
});
</script>

<style scoped>
#info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
#items-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 150px;
    justify-content: space-around;
}
#total-price-container {
    display: flex;
    align-items: center;
    padding: 8px 0px;
    justify-content: space-around;
}
</style>
