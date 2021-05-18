import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation/Ploc";
import { GetProductsUseCase } from "../domain/GetProductsUseCase";
import { productsInitialState, ProductsState } from "./ProductsState";

export class ProductsPloc extends Ploc<ProductsState> {
    constructor(private getProductsUseCase: GetProductsUseCase) {
        super(productsInitialState);
    }

    async search(searchTerm: string) {
        const productResult = await this.getProductsUseCase.execute(searchTerm);

        productResult.fold(
            error => this.changeState(this.handleError(searchTerm, error)),
            products =>
                this.changeState({
                    kind: "LoadedProductsState",
                    products,
                    searchTerm,
                })
        );
    }

    private handleError(searchTerm: string, error: DataError): ProductsState {
        switch (error.kind) {
            case "UnexpectedError": {
                return {
                    searchTerm,
                    kind: "ErrorProductsState",
                    error: "Sorry, an error has ocurred. Please try later again",
                };
            }
        }
    }
}
