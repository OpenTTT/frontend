import {Component, Input, OnInit} from '@angular/core';
import {Order, Timetable} from '../timetable';
import {TimetableService} from '../timetable.service';

@Component({
  selector: 'app-timetable-table',
  templateUrl: './timetable-table.component.html',
  styleUrls: ['./timetable-table.component.scss']
})
export class TimetableTableComponent implements OnInit {

  constructor(
    private api: TimetableService,
  ) { }

  @Input() timetableId: number;
  timetable: Timetable;
  orders: Order[];
  displayedColumns = ['destination', 'stayingTime', 'travelingTime'];

  ngOnInit() {
    this.api.getTimetable(this.timetableId).subscribe(
      timetable => {
        this.timetable = timetable;
        this.orders = timetable.orders;
      }
    );
  }

}
