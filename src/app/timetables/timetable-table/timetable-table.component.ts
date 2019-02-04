import {Component, Input, OnInit} from '@angular/core';
import {Order, Timetable} from '../../shared/model/timetable';
import {TimetableService} from '../../shared/services/timetable.service';
import {TimetableComponentBase} from '../timetable-component-base';

@Component({
  selector: 'app-timetable-table',
  templateUrl: './timetable-table.component.html',
  styleUrls: ['./timetable-table.component.scss']
})
export class TimetableTableComponent extends TimetableComponentBase implements OnInit {

  constructor(api: TimetableService) {
    super(api);
  }

  ngOnInit() {
    this.loadTimetable();
  }
}
