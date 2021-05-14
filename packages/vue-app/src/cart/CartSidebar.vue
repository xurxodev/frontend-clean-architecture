<template>
    <div>
        <Sidebar
            v-model:visible="state.open"
            position="right"
            v-bind:showCloseIcon="false"
            style="width: 400px; padding: 0px"
        >
            <div id="cart-container">
                <div id="header">
                    <Button class="p-button-link" @click="handleCloseCart" icon="pi pi-times" />
                    <h3>Cart</h3>
                    <h3></h3>
                </div>
                <Divider />
                <CartContent />
            </div>
        </Sidebar>
    </div>
</template>

<script lang="ts">
import { CartPloc } from "@frontend-clean-architecture/core";
import { defineComponent, inject } from "vue";
import { usePlocState } from "../common/usePlocState";
import CartContent from "./CartContent.vue";

export default defineComponent({
    components: {
        CartContent,
    },
    setup() {
        const cartPloc = inject<CartPloc>("cartPloc") as CartPloc;
        const state = usePlocState(cartPloc);

        const handleCloseCart = () => {
            cartPloc?.closeCart();
        };

        return {
            state,
            handleCloseCart,
        };
    },
});
</script>

<style scoped>
#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 0px 8px;
}

#cart-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

h3 {
    margin-right: 16px;
}

.p-button-link {
    margin: 8px 0px;
}
</style>
