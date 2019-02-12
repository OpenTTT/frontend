import { Tag } from '@shared/model/tag';

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
  tags: Tag[];
}
