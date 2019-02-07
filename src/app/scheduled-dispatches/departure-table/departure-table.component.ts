import { Component, Input, OnInit} from '@angular/core';
import { ScheduledDispatchService } from '@shared/services/scheduled-dispatch.service';
import {Observable} from 'rxjs';
import {ScheduleByStation} from '@shared/model/schedule-by-station';

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
  schedules: ScheduleByStation[];

  constructor(
    private api: ScheduledDispatchService,
  ) { }

  ngOnInit(): void {
    this.refresh();
    this.dispatchChange.subscribe(() => this.refresh());
  }

  private refresh() {
    this.isLoading = true;
    this.api.getSchedulesForDispatchByStation(this.dispatchId, this.numSchedules)
      .subscribe(schedules => {
        this.schedules = schedules;
        this.isLoading = false;
      });
  }
}
