import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from './stats';
import { HttpClient } from '@angular/common/http';
import { OpenTTTService } from './shared/openttt-service';

@Injectable({
  providedIn: 'root'
})
export class StatsService extends OpenTTTService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(this.url(`/stats`));
  }
}
