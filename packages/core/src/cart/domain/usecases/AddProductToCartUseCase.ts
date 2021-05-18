import { CartRepository } from "../CartRepository";
import { Cart } from "../Cart";
import { Product } from "../../../products/domain/Product";
import { Either } from "../../../common/domain/Either";
import { DataError } from "../../../common/domain/DataError";
import { EitherAsync } from "../../../common/domain/EitherAsync";

export class AddProductToCartUseCase {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    async execute(product: Product): Promise<Either<DataError, Cart>> {
        const cartResult = EitherAsync.fromPromise(this.cartRepository.get());

        return cartResult
            .flatMap(async cart => {
                const cartItem = {
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                };

                const editedCart = cart.addItem(cartItem);

                const saveResult = await this.cartRepository.save(editedCart);

                return saveResult.map(() => editedCart);
            })
            .run();
    }
}
