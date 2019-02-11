import {Component, Input, OnInit} from '@angular/core';
import {ScheduledDispatch} from '@shared/model/scheduled-dispatch';
import {ScheduledDispatchService} from '@shared/services/scheduled-dispatch.service';

@Component({
  selector: 'app-dispatch-basics',
  templateUrl: './dispatch-basics.component.html',
  styleUrls: ['./dispatch-basics.component.scss']
})
export class DispatchBasicsComponent implements OnInit {
  constructor(
    private api: ScheduledDispatchService,
  ) { }

  @Input() dispatch: ScheduledDispatch;
  newDeparture = 0;

  ngOnInit() {

  }

  updateDispatch() {
    this.api.updateScheduledDispatch(this.dispatch)
      .subscribe(updatedDispatch => this.dispatch = updatedDispatch);
  }

  trackDeparture(index) {
    return index;
  }

  removeDeparture(index: number) {
    this.dispatch.departures.splice(index, 1);
    this.updateDispatch();
  }

  addDeparture() {
    this.dispatch.departures.push(this.newDeparture);
    this.newDeparture = 0;
    this.updateDispatch();
  }
}
