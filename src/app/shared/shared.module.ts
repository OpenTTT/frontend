import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ScheduledDispatchService} from '@shared/services/scheduled-dispatch.service';
import {StationsService} from '@shared/services/stations.service';
import {TimetableService} from '@shared/services/timetable.service';
import {StatsService} from '@shared/services/stats.service';
import { OpenTTTErrorHandler, ValidationErrorSnackbarComponent } from '@shared/OpenTTTErrorHandler';
import { MatSnackBarModule } from '@angular/material';
import { TagsService } from '@shared/services/tags.service';

@NgModule({
  declarations: [
    ValidationErrorSnackbarComponent,
  ],
  entryComponents: [
    ValidationErrorSnackbarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule,
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
    StatsService,
    TagsService,
    {provide: ErrorHandler, useClass: OpenTTTErrorHandler},
  ]
})
export class SharedModule {

  constructor() {
  }
}
