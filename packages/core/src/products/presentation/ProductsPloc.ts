import { Ploc } from "../../common/presentation/Ploc";
import { GetProductsUseCase } from "../domain/GetProductsUseCase";
import { productsInitialState, ProductsState } from "./ProductsState";

export class ProductsPloc extends Ploc<ProductsState> {
    constructor(private getProductsUseCase: GetProductsUseCase) {
        super(productsInitialState);
    }

    search(searchTerm: string) {
        this.getProductsUseCase
            .execute(searchTerm)
            .then(products =>
                this.changeState({
                    kind: "LoadedProductsState",
                    products: products,
                    searchTerm,
                })
            )
            .catch(() =>
                this.changeState({
                    kind: "ErrorProductsState",
                    error: "An error has ocurred loading products",
                    searchTerm,
                })
            );
    }
}
