import { Injectable } from '@angular/core';
import { OpenTTTService } from '../shared/openttt-service';
import { HttpClient } from '@angular/common/http';
import { Timetable } from './timetable';
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
}
