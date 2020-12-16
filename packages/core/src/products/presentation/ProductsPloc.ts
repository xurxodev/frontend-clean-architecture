import Ploc from "../../common/presentation/Ploc";
import GetProductsUseCase from "../domain/GetProductsUseCase";
import { productsInitialState, ProductsState } from "./ProductsState";

export class ProductPloc extends Ploc<ProductsState> {
    constructor(private getProductsUseCase: GetProductsUseCase) {
        super(productsInitialState);
    }

    search(filter: string) {
        this.getProductsUseCase
            .execute(filter)
            .then(products =>
                this.changeState({
                    kind: "LoadedProductsState",
                    products: products,
                    searchTerm: this.state.searchTerm,
                })
            )
            .catch(() =>
                this.changeState({
                    kind: "ErrorProductsState",
                    error: "An error has ocurred loading products",
                    searchTerm: this.state.searchTerm,
                })
            );
    }
}
