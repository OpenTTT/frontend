import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchListComponent } from './dispatch-list/dispatch-list.component';
import { SharedModule } from '../shared/shared.module';
import {MatListModule, MatOptionModule, MatProgressBarModule, MatSelectModule, MatTableModule} from '@angular/material';
import { DispatchDetailComponent } from './dispatch-detail/dispatch-detail.component';
import { DepartureTableComponent } from './departure-table/departure-table.component';
import { TimetablesModule } from '../timetables/timetables.module';
import { NewScheduledDispatchComponent } from './new-scheduled-dispatch/new-scheduled-dispatch.component';

@NgModule({
  declarations: [DispatchListComponent, DispatchDetailComponent, DepartureTableComponent, NewScheduledDispatchComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule,
    TimetablesModule,
  ],
  exports: [DispatchListComponent, DispatchDetailComponent, NewScheduledDispatchComponent],
})
export class ScheduledDispatchesModule { }
