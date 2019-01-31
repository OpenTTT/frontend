import { Component, OnInit } from '@angular/core';
import { ScheduledDispatchService } from "../scheduled-dispatch.service";
import { ScheduledDispatch } from "../scheduled-dispatch";

@Component({
  selector: 'app-dispatch-list',
  templateUrl: './dispatch-list.component.html',
  styleUrls: ['./dispatch-list.component.scss']
})
export class DispatchListComponent implements OnInit {

  dispatches: ScheduledDispatch[];

  constructor(
    private api: ScheduledDispatchService,
  ) { }

  ngOnInit() {
    this.api.getDispatches()
      .subscribe(dispatches => this.dispatches = dispatches);
  }

}
