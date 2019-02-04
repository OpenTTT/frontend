import { Injectable } from '@angular/core';
import { OpenTTTService } from './openttt-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduledDispatch } from '../model/scheduled-dispatch';
import { Schedule } from '../model/schedule';
import { ScheduleByStation } from '../model/schedule-by-station';

@Injectable({
  providedIn: 'root'
})
export class ScheduledDispatchService extends OpenTTTService {

  constructor(private http: HttpClient) {
    super();
  }

  getDispatches(): Observable<ScheduledDispatch[]> {
    return this.http.get<ScheduledDispatch[]>(this.url('scheduled-dispatch/'));
  }

  getDispatch(id: number): Observable<ScheduledDispatch> {
    return this.http.get<ScheduledDispatch>(this.url(`scheduled-dispatch/${id}`));
  }

  getSchedulesForDispatch(id: number): Observable<Schedule[]> {
    // We always get five from the backend...
    return this.http.get<Schedule[]>(this.url(`scheduled-dispatch/${id}/departures`));
  }

  updateScheduledDispatch(dispatch: ScheduledDispatch): Observable<ScheduledDispatch> {
    return this.http.put<ScheduledDispatch>(this.url(`scheduled-dispatch/${dispatch.id}`), dispatch);
  }

  createScheduledDispatch(dispatch: ScheduledDispatch): Observable<ScheduledDispatch> {
    return this.http.post<ScheduledDispatch>(this.url('scheduled-dispatch/'), dispatch);
  }

  getSchedulesForDispatchByStation(id: number, numberOfDepartures: number = 5): Observable<ScheduleByStation[]> {
    return this.http.get<ScheduleByStation[]>(
      this.url(`scheduled-dispatch/${id}/departures-by-station`),
      {params: {numberOfDepartures: numberOfDepartures.toString()}}
    );
  }
}
