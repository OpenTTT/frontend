import {Component, OnInit, Output} from '@angular/core';
import {TimetableComponentBase} from '../timetable-component-base';
import {TimetableService} from '@shared/services/timetable.service';
import {Subject} from 'rxjs';
import {Order} from '@shared/model/timetable';

@Component({
  selector: 'app-timetable-editor',
  templateUrl: './timetable-editor.component.html',
  styleUrls: ['./timetable-editor.component.scss']
})
export class TimetableEditorComponent extends TimetableComponentBase implements OnInit {
  @Output() timetableChanged: Subject<any> = new Subject();

  constructor(api: TimetableService) {
    super(api);
  }

  ngOnInit() {
    this.loadTimetable();
  }

  onStayingTimeChanged(order: Order, newValue: number) {
    order.stayingTime = newValue;
    this.api.updateOrder(this.timetableId, order)
      .subscribe(() => this.timetableChanged.next());
  }

  onTravelingTimeChanged(order: Order, newValue: number) {
    order.travelingTime = newValue;
    this.api.updateOrder(this.timetableId, order)
      .subscribe(() => this.timetableChanged.next());
  }
}

