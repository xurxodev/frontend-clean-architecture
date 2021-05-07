<template>
    <Card>
        <template #header>
            <div
                id="product-image"
                v-bind:style="{ backgroundImage: 'url(' + product.image + ')' }"
            ></div>
        </template>
        <template #content>
            <h2 id="product-title">{{ product.title }}</h2>
            <p id="product-price">
                {{ product.price }}
            </p>
        </template>
        <template #footer>
            <Button id="add-to-cart" label="Add to Cart" @click="handleAddToCart" />
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
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const productsPloc = inject<CartPloc>("cartPloc");

        const handleAddToCart = () => {
            productsPloc?.addProductToCart({ ...props });
        };

        return {
            product: {
                ...props,
                price: props.price.toLocaleString("es-ES", {
                    style: "currency",
                    currency: "EUR",
                }),
            },
            handleAddToCart,
        };
    },
});
</script>

<style scoped>
.p-card-header {
    padding: 8px;
}
#product-image {
    padding-top: 100%;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
}
#product-title {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
    margin: 0px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
}
#product-price {
    text-align: center;
    margin: 16px 0px 0px 0px;
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.3rem;
}
.p-card-footer {
    padding: 0px;
}
#add-to-cart {
    margin: 0 auto;
    display: block;
}
</style>
