import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ScheduledDispatchService} from '@shared/services/scheduled-dispatch.service';
import {StationsService} from '@shared/services/stations.service';
import {TimetableService} from '@shared/services/timetable.service';
import {StatsService} from '@shared/services/stats.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    ScheduledDispatchService,
    StationsService,
    TimetableService,
    StatsService
  ]
})
export class SharedModule {

  constructor() {
  }
}
