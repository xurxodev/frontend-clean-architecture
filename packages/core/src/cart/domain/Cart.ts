import CartItem from "./CartItem";

export default class Cart {
    items: readonly CartItem[];
    readonly totalPrice: number;
    readonly totalItems: number;

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

    private calculateTotalPrice(items: CartItem[]): number {
        return +items
            .reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)
            .toFixed(2);
    }

    private calculateTotalItems(items: CartItem[]): number {
        return +items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }
}
