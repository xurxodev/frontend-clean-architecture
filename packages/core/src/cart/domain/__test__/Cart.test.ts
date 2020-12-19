import { Cart } from "../Cart";
import { CartItem } from "../CartItem";

describe("shopping cart", () => {
    describe("constructor", () => {
        it("should return totalPrice 0 and empty items if shopping cart is created using constructor with empty items", () => {
            const shoppingCart = new Cart([]);

            expect(shoppingCart.items).toEqual([]);
            expect(shoppingCart.totalPrice).toEqual(0);
            expect(shoppingCart.totalItems).toEqual(0);
        });

        it("should return totalPrice equal to item price and item if shopping cart is created using constructor with 1 item", () => {
            const items = [givenAShoppingCartItem(1, 29.99)];
            const shoppingCart = new Cart(items);

            expect(shoppingCart.items).toEqual(items);
            expect(shoppingCart.totalPrice).toEqual(29.99);
            expect(shoppingCart.totalItems).toEqual(1);
        });

        it("should return expected totalPrice and items if shopping cart is created using constructor with 2 items with quantity = 1", () => {
            const items = [givenAShoppingCartItem(1, 29.99), givenAShoppingCartItem(1, 39.94)];
            const shoppingCart = new Cart(items);

            expect(shoppingCart.items).toEqual(items);
            expect(shoppingCart.totalPrice).toEqual(69.93);
            expect(shoppingCart.totalItems).toEqual(2);
        });

        it("should return expected totalPrice and items if shopping cart is created using constructor with 2 items witn quantity > 1", () => {
            const items = [givenAShoppingCartItem(2, 29.99), givenAShoppingCartItem(5, 39.94)];
            const shoppingCart = new Cart(items);

            expect(shoppingCart.items).toEqual(items);
            expect(shoppingCart.totalPrice).toEqual(259.68);
            expect(shoppingCart.totalItems).toEqual(7);
        });
    });

    describe("createEmpty", () => {
        it("should return totalPrice 0 and empty items if shopping cart is created using create empty", () => {
            const shoppingCart = Cart.createEmpty();

            expect(shoppingCart.items).toEqual([]);
            expect(shoppingCart.totalPrice).toEqual(0);
            expect(shoppingCart.totalItems).toEqual(0);
        });
    });

    describe("addItem", () => {
        it("should return expected totalPrice and items if item with quantity 1 is added", () => {
            const items = [givenAShoppingCartItem(1, 29.99)];
            const shoppingCart = new Cart(items);
            const newShoppingCart = shoppingCart.addItem(givenAShoppingCartItem(1, 39.94));

            expect(newShoppingCart.items).toHaveLength(2);
            expect(newShoppingCart.totalPrice).toEqual(69.93);
            expect(newShoppingCart.totalItems).toEqual(2);
        });

        it("should return expected totalPrice and items if item with quantity > 1 is added", () => {
            const items = [givenAShoppingCartItem(1, 29.99)];
            const shoppingCart = new Cart(items);
            const newShoppingCart = shoppingCart.addItem(givenAShoppingCartItem(3, 39.94));

            expect(newShoppingCart.items).toHaveLength(2);
            expect(newShoppingCart.totalPrice).toEqual(149.81);
            expect(newShoppingCart.totalItems).toEqual(4);
        });

        it("should increment quantity to existed item and totalPrice if add a existed item again", () => {
            const items = [givenAShoppingCartItem(1, 29.99)];
            const shoppingCart = new Cart(items);
            const newShoppingCart = shoppingCart.addItem(items[0]);

            expect(newShoppingCart.items).toHaveLength(1);
            expect(newShoppingCart.totalPrice).toEqual(59.98);
            expect(newShoppingCart.totalItems).toEqual(2);
        });
    });

    describe("removeItem", () => {
        it("should return totalPrice 0 and empty items if remove unique item", () => {
            const items = [givenAShoppingCartItem(1, 29.99)];
            const shoppingCart = new Cart(items);
            const newShoppingCart = shoppingCart.removeItem(items[0].id);

            expect(newShoppingCart.items).toEqual([]);
            expect(newShoppingCart.totalPrice).toEqual(0);
            expect(newShoppingCart.totalItems).toEqual(0);
        });

        it("should return expected totalPrice and items if remove item", () => {
            const items = [givenAShoppingCartItem(1, 29.99), givenAShoppingCartItem(5, 39.94)];
            const shoppingCart = new Cart(items);
            const newShoppingCart = shoppingCart.removeItem(items[1].id);

            expect(newShoppingCart.items).toHaveLength(1);
            expect(newShoppingCart.totalPrice).toEqual(29.99);
            expect(newShoppingCart.totalItems).toEqual(1);
        });
    });

    describe("editItem", () => {
        it("should return expected totalPrice and items if edit quantity to unique item", () => {
            const items = [givenAShoppingCartItem(1, 29.99)];
            const shoppingCart = new Cart(items);

            const newShoppingCart = shoppingCart.editItem(items[0].id, 2);

            expect(newShoppingCart.items).toHaveLength(1);
            expect(newShoppingCart.totalPrice).toEqual(59.98);
            expect(newShoppingCart.totalItems).toEqual(2);
        });

        it("should return expected totalPrice and items if edit quantity to a item", () => {
            const items = [givenAShoppingCartItem(1, 29.99), givenAShoppingCartItem(5, 39.94)];
            const shoppingCart = new Cart(items);

            const newShoppingCart = shoppingCart.editItem(items[0].id, 2);

            expect(newShoppingCart.items).toHaveLength(2);
            expect(newShoppingCart.totalPrice).toEqual(259.68);
            expect(newShoppingCart.totalItems).toEqual(7);
        });
    });
});

function givenAShoppingCartItem(quantity = 1, price = 0): CartItem {
    return {
        id: Math.random().toString(36).substr(2, 9),
        image: "Fake image",
        title: "Fake title",
        price: price,
        quantity: quantity,
    };
}
