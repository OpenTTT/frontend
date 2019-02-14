import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationListComponent } from './station-list/station-list.component';
import { SharedModule } from '@shared/shared.module';
import { StationCreationComponent } from './station-creation/station-creation.component';

@NgModule({
  declarations: [StationListComponent, StationCreationComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    StationListComponent,
  ],
})
export class StationsModule { }
