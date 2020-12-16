import Product from "./Product";

export default interface ProductRepository {
    get(filter: string): Promise<Array<Product>>;
}
