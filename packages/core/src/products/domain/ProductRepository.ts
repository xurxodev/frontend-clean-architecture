import { Product } from "./Product";

export interface ProductRepository {
    get(filter: string): Promise<Array<Product>>;
}
