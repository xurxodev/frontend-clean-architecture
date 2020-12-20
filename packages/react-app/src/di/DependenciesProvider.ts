import {
    ProductsPloc,
    GetProductsUseCase,
    ProductInMemoryRepository,
    CartPloc,
    CartInMemoryRepository,
    GetCartUseCase,
    AddProductToCartUseCase,
    RemoveItemFromCartUseCase,
    EditQuantityOfCartItemUseCase,
} from "@frontend-clean-architecture/core";

export function provideProductsBloc(): ProductsPloc {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);
    const productsPloc = new ProductsPloc(getProductsUseCase);

    return productsPloc;
}

export function provideCartBloc(): CartPloc {
    const cartRepository = new CartInMemoryRepository();
    const getCartUseCase = new GetCartUseCase(cartRepository);
    const addProductToCartUseCase = new AddProductToCartUseCase(cartRepository);
    const removeItemFromCartUseCase = new RemoveItemFromCartUseCase(cartRepository);
    const editQuantityOfCartItemUseCase = new EditQuantityOfCartItemUseCase(cartRepository);
    const cartPloc = new CartPloc(
        getCartUseCase,
        addProductToCartUseCase,
        removeItemFromCartUseCase,
        editQuantityOfCartItemUseCase
    );

    return cartPloc;
}
