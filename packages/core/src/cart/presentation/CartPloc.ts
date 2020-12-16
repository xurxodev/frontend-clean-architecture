import { CartState, cartInitialState, CartItemState } from "./CartState";
import Ploc from "../../common/presentation/Ploc";
import GetCartUseCase from "../domain/usecases/GetCartUseCase";
import AddProductToCartUseCase from "../domain/usecases/AddProductToCartUseCase";
import RemoveItemFromCartUseCase from "../domain/usecases/RemoveItemFromCartUseCase";
import EditQuantityOfCartItemUseCase from "../domain/usecases/EditQuantityOfCartItemUseCase";
import Product from "../../products/domain/Product";
import Cart from "../domain/Cart";

export class CartPloc extends Ploc<CartState> {
    constructor(
        private getCartUseCase: GetCartUseCase,
        private addProductToCartUseCase: AddProductToCartUseCase,
        private removeItemFromCartUseCase: RemoveItemFromCartUseCase,
        private editQuantityOfCartItemUseCase: EditQuantityOfCartItemUseCase
    ) {
        super(cartInitialState);
        this.loadCart();
    }

    closeCart() {
        this.changeState({ ...this.state, open: false });
    }

    openCart() {
        this.changeState({ ...this.state, open: true });
    }

    removeCartItem(item: CartItemState) {
        this.removeItemFromCartUseCase
            .execute(item.id)
            .then(cart => this.changeState(this.mapToUpdatedState(cart)));
    }

    editQuantityCartItem(item: CartItemState, quantity: number) {
        this.editQuantityOfCartItemUseCase
            .execute(item.id, quantity)
            .then(cart => this.changeState(this.mapToUpdatedState(cart)));
    }

    addProductToCart(product: Product) {
        this.addProductToCartUseCase
            .execute(product)
            .then(cart => this.changeState(this.mapToUpdatedState(cart)));
    }

    private loadCart() {
        this.getCartUseCase
            .execute()
            .then(cart => this.changeState(this.mapToUpdatedState(cart)))
            .catch(() =>
                this.changeState({
                    kind: "ErrorCartState",
                    error: "An error has ocurred loading products",
                    open: this.state.open,
                })
            );
    }

    mapToUpdatedState(cart: Cart): CartState {
        const formatOptions = { style: "currency", currency: "EUR" };

        return {
            kind: "UpdatedCartState",
            open: this.state.open,
            totalItems: cart.totalItems,
            totalPrice: cart.totalPrice.toLocaleString("es-ES", formatOptions),
            items: cart.items.map(cartItem => {
                return {
                    id: cartItem.id,
                    image: cartItem.image,
                    title: cartItem.title,
                    price: cartItem.price.toLocaleString("es-ES", formatOptions),
                    quantity: cartItem.quantity,
                };
            }),
        };
    }
}
