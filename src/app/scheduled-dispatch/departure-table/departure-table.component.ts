import { Component, Input, OnInit } from '@angular/core';
import { ScheduledDispatchService } from "../scheduled-dispatch.service";

@Component({
  selector: 'app-departure-table',
  templateUrl: './departure-table.component.html',
  styleUrls: ['./departure-table.component.scss']
})
export class DepartureTableComponent implements OnInit {
  @Input("dispatchId") id: number;
  schedules: Object[];
  displayedColumns: string[] = ['station'];

  constructor(
    private api: ScheduledDispatchService,
  ) { }

  ngOnInit() {
    this.api.getSchedulesForDispatchByStation(this.id).subscribe(schedules => {
      schedules[0].departures.forEach((x, i) => this.displayedColumns.push(`departure${i}`));
      this.schedules = schedules.map((s) => {
        let obj = {station: s.station};

        s.departures.forEach((dep, idx) => {
          obj[`departure${idx}`] = dep.departure;
        });

        return obj;
      });
    });
  }

}
