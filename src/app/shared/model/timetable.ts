export interface Order {
  id: number;
  destination: string;
  stayingTime: number;
  travelingTime: number;
}

export interface Timetable {
  id: number;
  name: string;
  orders: Order[];
}
