export interface CommonCartState {
    open: boolean;
}

export interface LoadingCartState {
    kind: "LoadingCartState";
}

export interface UpdatedCartState {
    kind: "UpdatedCartState";
    items: Array<CartItemState>;
    totalPrice: string;
    totalItems: number;
}

export interface ErrorCartState {
    kind: "ErrorCartState";
    error: string;
}

export type CartState = (LoadingCartState | UpdatedCartState | ErrorCartState) & CommonCartState;

export interface CartItemState {
    id: string;
    image: string;
    title: string;
    price: string;
    quantity: number;
}

export const cartInitialState: CartState = {
    kind: "LoadingCartState",
    open: false,
};
