import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Product } from "./Product";

export interface ProductRepository {
    get(filter: string): Promise<Either<DataError, Product[]>>;
}
