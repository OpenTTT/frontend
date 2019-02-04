import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationListComponent } from './station-list/station-list.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { StationCreationComponent } from './station-creation/station-creation.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {StationsService} from './stations.service';

@NgModule({
  declarations: [StationListComponent, StationCreationComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [
    StationListComponent,
  ],
  providers: [
    StationsService,
  ]
})
export class StationsModule { }
