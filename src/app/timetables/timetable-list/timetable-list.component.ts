import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../timetable.service';
import {Timetable} from '../timetable';

@Component({
  selector: 'app-timetable-lsit',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.scss']
})
export class TimetableListComponent implements OnInit {

  constructor(private api: TimetableService) { }

  timetables: Timetable[] = [];

  ngOnInit() {
    this.api.getTimetables()
      .subscribe(timetables => this.timetables = timetables);
  }

}
