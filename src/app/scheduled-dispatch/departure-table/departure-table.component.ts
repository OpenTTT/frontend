import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ScheduledDispatchService } from "../scheduled-dispatch.service";

class ScheduleRow {
  station: string;
  [key: string]: string;
}

@Component({
  selector: 'app-departure-table',
  templateUrl: './departure-table.component.html',
  styleUrls: ['./departure-table.component.scss']
})
export class DepartureTableComponent implements OnChanges {
  @Input("dispatchId") id: number;
  @Input("schedulesDisplayed") numSchedules = 5;

  schedules: ScheduleRow[];
  displayedColumns: string[] = ['station'];

  constructor(
    private api: ScheduledDispatchService,
  ) { }

  ngOnChanges(): void {
    console.log(`Requesting ${this.numSchedules} schedules for ${this.id}`);
    this.api.getSchedulesForDispatchByStation(this.id, this.numSchedules).subscribe(schedules => {
      this.clearModel();
      schedules[0].departures.forEach((x, i) => this.displayedColumns.push(`departure${i}`));
      this.schedules = schedules.map((s) => {
        let row = {station: s.station};

        s.departures.forEach((dep, idx) => {
          row[`departure${idx}`] = dep.departure;
        });

        return row;
      });
    });
  }

  clearModel() {
    this.schedules = [];
    this.displayedColumns = ['station'];
  }

}
