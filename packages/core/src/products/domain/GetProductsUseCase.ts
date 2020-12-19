import { ProductRepository } from "./ProductRepository";
import { Product } from "./Product";

export class GetProductsUseCase {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    execute(filter: string): Promise<Array<Product>> {
        return this.productRepository.get(filter);
    }
}
