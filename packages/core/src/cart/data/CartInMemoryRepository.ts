import { CartRepository } from "../domain/CartRepository";
import { Cart } from "../domain/Cart";
import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";

export class CartInMemoryRepository implements CartRepository {
    cart = new Cart([
        {
            id: "1",
            image: "https://images-na.ssl-images-amazon.com/images/I/71Y1S1m-QAL._AC_UY879_.jpg",
            title: "Element Blazin LS tee Shirt, Hombre",
            price: 19.95,
            quantity: 3,
        },
        {
            id: "2",
            image: "https://m.media-amazon.com/images/I/81HnHYik58L._AC_UL640_FMwebp_QL65_.jpg",
            title: "Element Vertical SS tee Shirt, Hombre",
            price: 21.95,
            quantity: 1,
        },
    ]);

    get(): Promise<Either<DataError, Cart>> {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                try {
                    resolve(Either.right(this.cart));
                } catch (error) {
                    resolve(Either.left({ kind: "UnexpectedError", error }));
                }
            }, 100);
        });
    }

    save(cart: Cart): Promise<Either<DataError, boolean>> {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                try {
                    this.cart = cart;
                    resolve(Either.right(true));
                } catch (error) {
                    resolve(Either.left({ kind: "UnexpectedError", error }));
                }
            }, 100);
        });
    }
}
