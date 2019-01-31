import { Injectable } from '@angular/core';
import { OpenTTTService } from "../shared/openttt-service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ScheduledDispatch } from "./scheduled-dispatch";
import { Schedule } from "./schedule";
import { ScheduleByStation } from "./schedule-by-station";

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

  getSchedulesForDispatchByStation(id: number, numberOfDepartures: number = 5): Observable<ScheduleByStation[]> {
    return this.http.get<ScheduleByStation[]>(
      this.url(`scheduled-dispatch/${id}/departures-by-station`),
      {params: {numberOfDepartures: numberOfDepartures.toString()}}
    );
  }
}
