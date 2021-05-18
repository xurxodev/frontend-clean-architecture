import { CartState, cartInitialState, CartItemState } from "./CartState";
import { Ploc } from "../../common/presentation/Ploc";
import { GetCartUseCase } from "../domain/usecases/GetCartUseCase";
import { AddProductToCartUseCase } from "../domain/usecases/AddProductToCartUseCase";
import { RemoveItemFromCartUseCase } from "../domain/usecases/RemoveItemFromCartUseCase";
import { EditQuantityOfCartItemUseCase } from "../domain/usecases/EditQuantityOfCartItemUseCase";
import { Product } from "../../products/domain/Product";
import { Cart } from "../domain/Cart";
import { DataError } from "../../common/domain/DataError";

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

    async removeCartItem(item: CartItemState) {
        const result = await this.removeItemFromCartUseCase.execute(item.id);

        result.fold(
            error => this.changeState(this.handleError(error)),
            cart => this.changeState(this.mapToUpdatedState(cart))
        );
    }

    async editQuantityCartItem(item: CartItemState, quantity: number) {
        const result = await this.editQuantityOfCartItemUseCase.execute(item.id, quantity);

        result.fold(
            error => this.changeState(this.handleError(error)),
            cart => this.changeState(this.mapToUpdatedState(cart))
        );
    }

    async addProductToCart(product: Product) {
        const result = await this.addProductToCartUseCase.execute(product);

        result.fold(
            error => this.changeState(this.handleError(error)),
            cart => this.changeState(this.mapToUpdatedState(cart))
        );
    }

    private async loadCart() {
        const result = await this.getCartUseCase.execute();

        result.fold(
            error => this.changeState(this.handleError(error)),
            cart => this.changeState(this.mapToUpdatedState(cart))
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

    private handleError(error: DataError): CartState {
        switch (error.kind) {
            case "UnexpectedError": {
                return {
                    open: this.state.open,
                    kind: "ErrorCartState",
                    error: "Sorry, an error has ocurred. Please try later again",
                };
            }
        }
    }
}
