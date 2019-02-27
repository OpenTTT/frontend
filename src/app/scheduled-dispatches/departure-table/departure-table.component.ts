import { Component, Input, OnInit} from '@angular/core';
import { ScheduledDispatchService } from '@shared/services/scheduled-dispatch.service';
import { Observable } from 'rxjs';
import { ScheduleByStation } from '@shared/model/schedule-by-station';
import { DispatchChangeService } from '../dispatch-change.service';

@Component({
  selector: 'app-departure-table',
  templateUrl: './departure-table.component.html',
  styleUrls: ['./departure-table.component.scss']
})
export class DepartureTableComponent implements OnInit {
  @Input() dispatchId: number;
  @Input() numSchedules = 5;

  schedules: ScheduleByStation[];

  constructor(
    private api: ScheduledDispatchService,
    private dispatchChange: DispatchChangeService,
  ) { }

  ngOnInit(): void {
    this.refresh();
    this.dispatchChange
      .observable()
      .subscribe(() => this.refresh());
  }

  private refresh() {
    this.api.getSchedulesForDispatchByStation(this.dispatchId, this.numSchedules, true)
      .subscribe(schedules => {
        this.schedules = schedules;
      });
  }
}
