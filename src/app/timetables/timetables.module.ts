import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableTableComponent } from './timetable-table/timetable-table.component';
import {SharedModule} from '../shared/shared.module';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [TimetableTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
  ],
  exports: [TimetableTableComponent]
})
export class TimetablesModule { }
