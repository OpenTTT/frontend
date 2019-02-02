import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ScheduledDispatchService } from '../scheduled-dispatch.service';
import {Observable} from 'rxjs';

class ScheduleRow {
  station: string;
  [key: string]: string;
}

@Component({
  selector: 'app-departure-table',
  templateUrl: './departure-table.component.html',
  styleUrls: ['./departure-table.component.scss']
})
export class DepartureTableComponent implements OnInit, OnChanges {
  @Input() dispatchId: number;
  @Input() numSchedules = 5;
  @Input() dispatchChange: Observable<any>;

  schedules: ScheduleRow[];
  displayedColumns: string[] = ['station'];

  constructor(
    private api: ScheduledDispatchService,
  ) { }

  ngOnInit(): void {
    this.dispatchChange.subscribe(this.refresh);
  }

  ngOnChanges(): void {
    this.refresh();
  }

  private refresh() {
    this.api.getSchedulesForDispatchByStation(this.dispatchId, this.numSchedules).subscribe(schedules => {
      this.clearModel();
      schedules[0].departures.forEach((x, i) => this.displayedColumns.push(`departure${i}`));
      this.schedules = schedules.map((s) => {
        const row = {station: s.station};

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
