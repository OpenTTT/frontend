import {TimetableService} from './timetable.service';
import {Input} from '@angular/core';
import {Order, Timetable} from './timetable';

export class TimetableComponentBase {

  constructor(
    protected api: TimetableService,
  ) { }


  @Input()
  protected timetableId: number;
  protected timetable: Timetable;
  protected orders: Order[];
  protected displayedColumns = ['destination', 'stayingTime', 'travelingTime'];

  protected loadTimetable() {
    this.api.getTimetable(this.timetableId).subscribe(
      timetable => {
        this.timetable = timetable;
        this.orders = timetable.orders;
      }
    );
  }
}
