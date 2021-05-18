export type ProductId = string;
export type Image = string;
export type Title = string;
export type Price = number;

export interface Product {
    id: ProductId;
    image: Image;
    title: Title;
    price: Price;
}
