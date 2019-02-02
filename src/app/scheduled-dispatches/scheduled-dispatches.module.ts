import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchListComponent } from './dispatch-list/dispatch-list.component';
import { SharedModule } from '../shared/shared.module';
import {MatListModule, MatProgressBarModule, MatTableModule} from '@angular/material';
import { DispatchDetailComponent } from './dispatch-detail/dispatch-detail.component';
import { DepartureTableComponent } from './departure-table/departure-table.component';
import { TimetablesModule } from '../timetables/timetables.module';

@NgModule({
  declarations: [DispatchListComponent, DispatchDetailComponent, DepartureTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatTableModule,
    MatProgressBarModule,
    TimetablesModule,
  ],
  exports: [DispatchListComponent, DispatchDetailComponent],
})
export class ScheduledDispatchesModule { }
