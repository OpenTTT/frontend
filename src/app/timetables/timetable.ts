export interface Order {
  id: number;
  destination: string;
  stayingTime: number;
  travelingTime: number;
}

export interface Timetable {
  name: string;
  orders: Order[];
}
