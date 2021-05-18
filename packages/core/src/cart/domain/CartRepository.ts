import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Cart } from "./Cart";

export interface CartRepository {
    get(): Promise<Either<DataError, Cart>>;
    save(cart: Cart): Promise<Either<DataError, boolean>>;
}
