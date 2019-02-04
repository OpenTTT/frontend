import {TimetableService} from '../shared/services/timetable.service';
import {Input} from '@angular/core';
import {Order, Timetable} from '../shared/model/timetable';

export class TimetableComponentBase {

  constructor(
    public api: TimetableService,
  ) { }


  @Input() timetableId: number;
  timetable: Timetable;
  orders: Order[];
  displayedColumns = ['destination', 'stayingTime', 'travelingTime'];

  public loadTimetable() {
    this.api.getTimetable(this.timetableId).subscribe(
      timetable => {
        this.timetable = timetable;
        this.orders = timetable.orders;
      }
    );
  }
}
