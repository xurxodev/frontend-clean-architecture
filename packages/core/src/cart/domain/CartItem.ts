import { Price, Title, Image } from "../../products/domain/Product";

type CartItemId = string;
type Quantity = number;

export interface CartItem {
    readonly id: CartItemId;
    readonly image: Image;
    readonly title: Title;
    readonly price: Price;
    readonly quantity: Quantity;
}
