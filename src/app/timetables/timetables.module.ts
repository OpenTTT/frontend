import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableTableComponent } from './timetable-table/timetable-table.component';
import {SharedModule} from '../shared/shared.module';
import {
  MatAutocompleteModule, MatButtonModule,
  MatCardModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTableModule
} from '@angular/material';
import { TimetableEditorComponent } from './timetable-editor/timetable-editor.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { TimetableDetailComponent } from './timetable-detail/timetable-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TimetableStructuralEditorComponent } from './timetable-structural-editor/timetable-structural-editor.component';
import {StationsModule} from '../stations/stations.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TimetableTableComponent,
    TimetableEditorComponent,
    TimetableListComponent,
    TimetableDetailComponent,
    TimetableStructuralEditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatAutocompleteModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
    StationsModule,
  ],
  exports: [TimetableTableComponent, TimetableEditorComponent, TimetableListComponent]
})
export class TimetablesModule { }
