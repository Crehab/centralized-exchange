export interface Order {
    userId: string;
    price: number;
    quantity: number;
    side: "buy" | "sell";
}
