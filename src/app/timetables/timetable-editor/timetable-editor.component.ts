import {Component, Input, OnInit} from '@angular/core';
import {TimetableComponentBase} from '../timetable-component-base';
import {TimetableService} from '../timetable.service';

@Component({
  selector: 'app-timetable-editor',
  templateUrl: './timetable-editor.component.html',
  styleUrls: ['./timetable-editor.component.scss']
})
export class TimetableEditorComponent extends TimetableComponentBase implements OnInit {


  constructor(api: TimetableService) {
    super(api);
  }

  ngOnInit() {
    this.loadTimetable();
  }

  onStayingTimeChanged(orderId, newValue) {
    console.log(`Staying time changed for TimetabledOrder ${orderId} changed to ${newValue}`);
  }

  onTravelingTimeChanged(orderId, newValue) {
    console.log(`Staying time changed for TimetabledOrder ${orderId} changed to ${newValue}`);
  }
}
