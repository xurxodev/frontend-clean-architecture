import Cart from "./Cart";

export default interface CartRepository {
    get(): Promise<Cart>;
    save(cart: Cart): Promise<boolean>;
}
