import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchListComponent } from './dispatch-list/dispatch-list.component';
import { SharedModule } from '../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
} from '@angular/material';
import { DispatchDetailComponent } from './dispatch-detail/dispatch-detail.component';
import { DepartureTableComponent } from './departure-table/departure-table.component';
import { TimetablesModule } from '../timetables/timetables.module';
import { NewScheduledDispatchComponent } from './new-scheduled-dispatch/new-scheduled-dispatch.component';
import { DispatchBasicsComponent } from './dispatch-basics/dispatch-basics.component';
import { TagsModule } from '../tags/tags.module';

@NgModule({
  declarations: [
    DispatchListComponent,
    DispatchDetailComponent,
    DepartureTableComponent,
    NewScheduledDispatchComponent,
    DispatchBasicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    TimetablesModule,
    TagsModule,
  ],
  exports: [DispatchListComponent, DispatchDetailComponent, NewScheduledDispatchComponent],
})
export class ScheduledDispatchesModule { }

