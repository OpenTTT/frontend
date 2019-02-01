import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableTableComponent } from './timetable-table/timetable-table.component';
import {SharedModule} from '../shared/shared.module';
import {MatTableModule} from '@angular/material';
import { TimetableEditorComponent } from './timetable-editor/timetable-editor.component';

@NgModule({
  declarations: [TimetableTableComponent, TimetableEditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
  ],
  exports: [TimetableTableComponent, TimetableEditorComponent]
})
export class TimetablesModule { }
