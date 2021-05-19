import { CartItem } from "./CartItem";

type TotalPrice = number;
type TotalItems = number;

export class Cart {
    items: readonly CartItem[];
    readonly totalPrice: TotalPrice;
    readonly totalItems: TotalItems;

    constructor(items: CartItem[]) {
        this.items = items;
        this.totalPrice = this.calculateTotalPrice(items);
        this.totalItems = this.calculateTotalItems(items);
    }

    static createEmpty(): Cart {
        return new Cart([]);
    }

    addItem(item: CartItem): Cart {
        const existedItem = this.items.find(i => i.id === item.id);

        if (existedItem) {
            const newItems = this.items.map(oldItem => {
                if (oldItem.id === item.id) {
                    return { ...oldItem, quantity: oldItem.quantity + item.quantity };
                } else {
                    return oldItem;
                }
            });

            return new Cart(newItems);
        } else {
            const newItems = [...this.items, item];

            return new Cart(newItems);
        }
    }

    removeItem(itemId: string): Cart {
        const newItems = this.items.filter(i => i.id !== itemId);

        return new Cart(newItems);
    }

    editItem(itemId: string, quantity: number): Cart {
        const newItems = this.items.map(oldItem => {
            if (oldItem.id === itemId) {
                return { ...oldItem, quantity: quantity };
            } else {
                return oldItem;
            }
        });

        return new Cart(newItems);
    }

    private calculateTotalPrice(items: CartItem[]): TotalPrice {
        return +items
            .reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)
            .toFixed(2);
    }

    private calculateTotalItems(items: CartItem[]): TotalItems {
        return +items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }
}
