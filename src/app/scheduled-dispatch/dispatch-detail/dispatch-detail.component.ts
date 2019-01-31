import { Component, OnInit } from '@angular/core';
import { ScheduledDispatch } from "../scheduled-dispatch";
import { ActivatedRoute} from "@angular/router";
import { ScheduledDispatchService } from "../scheduled-dispatch.service";
import { ScheduleByStation } from "../schedule-by-station";

@Component({
  selector: 'app-dispatch-detail',
  templateUrl: './dispatch-detail.component.html',
  styleUrls: ['./dispatch-detail.component.scss']
})
export class DispatchDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ScheduledDispatchService,
  ) { }

  dispatch: ScheduledDispatch;
  schedules: Object[];
  displayedColumns: string[] = ['station'];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.api.getDispatch(id).subscribe(dispatch => this.dispatch = dispatch);
      this.api.getSchedulesForDispatchByStation(id).subscribe(schedules => {
        schedules[0].departures.forEach((x, i) => this.displayedColumns.push(`departure${i}`));
        this.schedules = schedules.map((s) => {
          let obj = {station: s.station};

          s.departures.forEach((dep, idx) => {
            obj[`departure${idx}`] = dep.departure;
          });

          return obj;
        });
        console.log(this.schedules);
      });
    });
  }
}
