import { CartRepository } from "../CartRepository";
import { Cart } from "../Cart";

export class GetCartUseCase {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    execute(): Promise<Cart> {
        return this.cartRepository.get();
    }
}
