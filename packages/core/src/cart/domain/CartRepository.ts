import { Cart } from "./Cart";

export interface CartRepository {
    get(): Promise<Cart>;
    save(cart: Cart): Promise<boolean>;
}
