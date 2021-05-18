import { ProductRepository } from "../domain/ProductRepository";
import { Product } from "../domain/Product";
import { Either } from "../../common/domain/Either";
import { DataError } from "../../common/domain/DataError";

const products = [
    {
        id: "1",
        image: "https://images-na.ssl-images-amazon.com/images/I/71Y1S1m-QAL._AC_UY879_.jpg",
        title: "Element Blazin LS tee Shirt, Hombre",
        price: 19.95,
    },
    {
        id: "2",
        image: "https://m.media-amazon.com/images/I/81HnHYik58L._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Vertical SS tee Shirt, Hombre",
        price: 21.95,
    },
    {
        id: "3",
        image: "https://m.media-amazon.com/images/I/81ZYZ9yl1hL._AC_UL640_FMwebp_QL65_.jpg",
        title: 'Element Skater Backpack Mohave 15" Saison ',
        price: 52.45,
    },
    {
        id: "4",
        image: "https://m.media-amazon.com/images/I/61-DwEh1zrL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Indiana Logo N1SSA5ELP9",
        price: 18.9,
    },
    {
        id: "5",
        image: "https://m.media-amazon.com/images/I/81SgdrnVNJL._AC_UL320_.jpg",
        title: "Basic Pocket Label Camisetas Element Hombre",
        price: 27.95,
    },
    {
        id: "6",
        image: "https://m.media-amazon.com/images/I/81giLCXfxIL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element N2ssa2 Camiseta, Niños",
        price: 13.9,
    },
    {
        id: "7",
        image: "https://m.media-amazon.com/images/I/61S2KdoGNnL._AC_UL320_.jpg",
        title: "Joint - Camiseta para Hombre Camiseta Element Hombre",
        price: 32.0,
    },
    {
        id: "8",
        image: "https://m.media-amazon.com/images/I/7119OAEE+gL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Alder Light 2 Tones",
        price: 68.35,
    },
    {
        id: "9",
        image: "https://m.media-amazon.com/images/I/71dp5f24TbL._AC_UL640_FMwebp_QL65_.jpg",
        title: 'Element Skater Backpack Mohave 15" Season',
        price: 52.84,
    },
    {
        id: "10",
        image: "https://m.media-amazon.com/images/I/71Kj-jV5v8L._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Vertical SS Camiseta, Niños",
        price: 13.9,
    },
    {
        id: "11",
        image: "https://m.media-amazon.com/images/I/71jlppwpjmL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Alder Heavy Puff TW Chaqueta, Hombre, Verde Oliva, M EU",
        price: 168.75,
    },
    {
        id: "12",
        image: "https://m.media-amazon.com/images/I/71BSdq6OzDL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Hombre Meridian Block Sudadera Mid Grey HTR",
        price: 47.5,
    },
    {
        id: "13",
        image: "https://m.media-amazon.com/images/I/81RAeKF-8wL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Sudadera - para Hombre",
        price: 64.94,
    },
    {
        id: "14",
        image: "https://m.media-amazon.com/images/I/717tHbEHDnL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Hombre Camiseta t-Shirt Signature",
        price: 29.84,
    },
    {
        id: "15",
        image: "https://m.media-amazon.com/images/I/81rOs3LA0LL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Section' Pre-Built Complete - 7.50\"",
        price: 99.0,
    },
    {
        id: "16",
        image: "https://m.media-amazon.com/images/I/61-xQZORAKL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Camiseta - para hombre",
        price: 27.06,
    },
    {
        id: "17",
        image: "https://m.media-amazon.com/images/I/71RUdoglJML._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Alder Light",
        price: 86.52,
    },
    {
        id: "18",
        image: "https://m.media-amazon.com/images/I/714tTmj4KvL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Chaqueta Alder Puff TW Negro",
        price: 73.5,
    },
];

export class ProductInMemoryRepository implements ProductRepository {
    get(filter: string): Promise<Either<DataError, Product[]>> {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                try {
                    if (filter) {
                        const filteredProducts = products.filter((p: Product) => {
                            return p.title.toLowerCase().includes(filter.toLowerCase());
                        });

                        resolve(Either.right(filteredProducts));
                    } else {
                        resolve(Either.right(products));
                    }
                } catch (error) {
                    resolve(Either.left(error));
                }
            }, 100);
        });
    }
}
