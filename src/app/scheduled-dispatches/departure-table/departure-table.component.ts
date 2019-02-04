import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ScheduledDispatchService } from '../../shared/services/scheduled-dispatch.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

class ScheduleRow {
  station: string;
  [key: string]: any; // TODO: make this not be any, but structured data!
}

@Component({
  selector: 'app-departure-table',
  templateUrl: './departure-table.component.html',
  styleUrls: ['./departure-table.component.scss']
})
export class DepartureTableComponent implements OnInit {
  @Input() dispatchId: number;
  @Input() numSchedules = 5;
  @Input() dispatchChange: Observable<any>;

  isLoading = true;
  schedules: ScheduleRow[];
  displayedColumns: string[] = ['station'];

  constructor(
    private api: ScheduledDispatchService,
  ) { }

  ngOnInit(): void {
    this.refresh();
    this.dispatchChange.subscribe(() => this.refresh());
  }

  private refresh() {
    this.isLoading = true;
    this.api.getSchedulesForDispatchByStation(this.dispatchId, this.numSchedules).subscribe(schedules => {
      this.clearModel();
      schedules[0].departures.forEach((x, i) => this.displayedColumns.push(`departure${i}`));
      this.schedules = schedules.map((s) => {
        const row = {station: s.station};

        s.departures.forEach((dep, idx) => {
          row[`departure${idx}`] = {a: dep.arrival, d: dep.departure};
        });

        return row;
      });
      this.isLoading = false;
    });
  }

  clearModel() {
    this.schedules = [];
    this.displayedColumns = ['station'];
  }

}
