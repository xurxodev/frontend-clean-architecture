import { CartRepository } from "../CartRepository";
import { Cart } from "../Cart";
import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";

export class GetCartUseCase {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    execute(): Promise<Either<DataError, Cart>> {
        return this.cartRepository.get();
    }
}
