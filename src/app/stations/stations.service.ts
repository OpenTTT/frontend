import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from './station';
import { OpenTTTService } from '../shared/openttt-service';

@Injectable({
  providedIn: 'root'
})
export class StationsService extends OpenTTTService {

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  getAll(): Observable<Station[]> {
    return this.http.get<Station[]>(this.url('destinations/'));
  }

  create(station: Station): Observable<Station> {
    return this.http.post<Station>(this.url('destination/'), station);
  }
}
