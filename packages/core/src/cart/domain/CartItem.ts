export default interface CartItem {
    readonly id: string;
    readonly image: string;
    readonly title: string;
    readonly price: number;
    readonly quantity: number;
}
