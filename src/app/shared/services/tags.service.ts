import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../model/stats';
import { HttpClient } from '@angular/common/http';
import { OpenTTTService } from './openttt-service';
import { Tag } from '@shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService extends OpenTTTService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.url('/tags'));
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.url('/tags'), tag);
  }
}
