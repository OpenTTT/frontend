import { Injectable } from '@angular/core';
import { OpenTTTService } from '../shared/openttt-service';
import { HttpClient } from '@angular/common/http';
import {Order, Timetable} from './timetable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService extends OpenTTTService {

  constructor(private http: HttpClient) {
    super();
  }

  getTimetable(id: number): Observable<Timetable> {
    return this.http.get<Timetable>(this.url(`timetable/${id}`));
  }

  updateOrder(timetableId: number, order: Order): Observable<Order> {
    const url = this.url(`timetable/${timetableId}/order/${order.id}`);
    return this.http.put<Order>(url, order);
  }
}
