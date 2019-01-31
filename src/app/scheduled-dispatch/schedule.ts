export class Order {
  destination: string;
  arrival: string; // TODO ??? Date doesn't really benefit us? Backend is delivering strings, too (but that's just json)
  departure: string;
}

export class Schedule {
  orders: Order[];
}
