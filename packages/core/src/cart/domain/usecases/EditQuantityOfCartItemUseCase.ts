import CartRepository from "../CartRepository";
import Cart from "../Cart";

export default class EditQuantityOfCartItemUseCase {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    async execute(itemId: string, quantity: number): Promise<Cart> {
        const cart = await this.cartRepository.get();

        const editedCart = cart.editItem(itemId, quantity);

        await this.cartRepository.save(editedCart);

        return editedCart;
    }
}
