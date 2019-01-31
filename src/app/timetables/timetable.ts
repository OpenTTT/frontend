export class Order {
  destination: string;
  stayingTime: number;
  travelingTime: number;
}

export class Timetable {
  name: string;
  orders: Order[];
}
