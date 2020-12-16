import Product from "../domain/Product";

export interface CommonProductsState {
    searchTerm: string;
}

export interface LoadingProductsState {
    kind: "LoadingProductsState";
}

export interface LoadedProductsState {
    kind: "LoadedProductsState";
    products: Array<Product>;
}

export interface ErrorProductsState {
    kind: "ErrorProductsState";
    error: string;
}

export type ProductsState = (LoadingProductsState | LoadedProductsState | ErrorProductsState) &
    CommonProductsState;

export const productsInitialState: ProductsState = {
    kind: "LoadingProductsState",
    searchTerm: "",
};
