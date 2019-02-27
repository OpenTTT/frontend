import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatchChangeService {
  subject: Subject<any> = new Subject();

  constructor() {}

  next() {
    this.subject.next();
  }

  observable(): Observable<any> {
    return this.subject.asObservable();
  }
}
