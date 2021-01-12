import { CartInMemoryRepository } from "../../cart/data/CartInMemoryRepository";
import { AddProductToCartUseCase } from "../../cart/domain/usecases/AddProductToCartUseCase";
import { EditQuantityOfCartItemUseCase } from "../../cart/domain/usecases/EditQuantityOfCartItemUseCase";
import { GetCartUseCase } from "../../cart/domain/usecases/GetCartUseCase";
import { RemoveItemFromCartUseCase } from "../../cart/domain/usecases/RemoveItemFromCartUseCase";
import { CartPloc } from "../../cart/presentation/CartPloc";
import { ProductInMemoryRepository } from "../../products/data/ProductInMemoryRepository";
import { GetProductsUseCase } from "../../products/domain/GetProductsUseCase";
import { ProductsPloc } from "../../products/presentation/ProductsPloc";

function provideProductsPloc(): ProductsPloc {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);
    const productsPloc = new ProductsPloc(getProductsUseCase);

    return productsPloc;
}

function provideCartPloc(): CartPloc {
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

export const dependenciesLocator = {
    provideProductsPloc,
    provideCartPloc
}