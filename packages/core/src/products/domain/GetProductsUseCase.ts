import { ProductRepository } from "./ProductRepository";
import { Product } from "./Product";
import { Either } from "../../common/domain/Either";
import { DataError } from "../../common/domain/DataError";

export class GetProductsUseCase {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    execute(filter: string): Promise<Either<DataError, Product[]>> {
        return this.productRepository.get(filter);
    }
}
