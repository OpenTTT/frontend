import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableTableComponent } from './timetable-table/timetable-table.component';
import {SharedModule} from '../shared/shared.module';
import {MatAutocompleteModule, MatTableModule} from '@angular/material';
import { TimetableEditorComponent } from './timetable-editor/timetable-editor.component';
import { TimetableListComponent } from './timetable-lsit/timetable-list.component';
import { TimetableDetailComponent } from './timetable-detail/timetable-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TimetableStructuralEditorComponent } from './timetable-structural-editor/timetable-structural-editor.component';
import {StationsModule} from '../stations/stations.module';

@NgModule({
  declarations: [
    TimetableTableComponent,
    TimetableEditorComponent,
    TimetableListComponent,
    TimetableDetailComponent,
    TimetableStructuralEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    StationsModule,

  ],
  exports: [TimetableTableComponent, TimetableEditorComponent, TimetableListComponent]
})
export class TimetablesModule { }
