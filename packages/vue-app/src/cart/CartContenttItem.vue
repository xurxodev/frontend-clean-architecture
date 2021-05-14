<template>
    <Card id="card" style="margin: 8px">
        <template #content>
            <div class="item-container">
                <img class="item-image" width="80" :src="item.image" :alt="item.title" />
                <div class="middle-container">
                    {{ item.title }}

                    <div class="quantity-price-container">
                        <div class="quantity-container">
                            <label for="vertical" style="display: block; margin-bottom: 8px"
                                >Quantity</label
                            >
                            <InputNumber
                                :modelValue="item.quantity"
                                mode="decimal"
                                showButtons
                                inputStyle="width: 30px"
                                @input="handleQuantityChange"
                            />
                        </div>
                        <div class="p-text-italic price">{{ item.price }}</div>
                    </div>
                </div>

                <Button class="p-button-link" @click="handleRemoveItem" icon="pi pi-times" />
            </div>
        </template>
    </Card>
</template>

<script lang="ts">
import { CartPloc } from "@frontend-clean-architecture/core";
import { defineComponent, inject } from "vue";

export default defineComponent({
    props: {
        id: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const cartPloc = inject<CartPloc>("cartPloc");

        const handleQuantityChange = (e: { originalEvent: Event; value: number }) => {
            cartPloc?.editQuantityCartItem({ ...props }, e.value);
        };

        const handleRemoveItem = () => {
            cartPloc?.removeCartItem({ ...props });
        };

        return {
            item: {
                ...props,
            },
            handleQuantityChange,
            handleRemoveItem,
        };
    },
});
</script>

<style scoped>
h4 {
    margin: 0px;
}
#card {
    margin: 8px 0px;
}
.item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
    justify-content: space-around;
}
.item-image {
    padding: 0px 8px;
    background-size: auto 100%;
}
.middle-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.quantity-price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.p-inputtext {
    width: 50px !important;
}
.quantity-container {
    width: 40px;
    margin: 8px;
}
.price {
    margin-top: 8px;
}
</style>
