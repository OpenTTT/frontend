import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationListComponent } from './station-list/station-list.component';

@NgModule({
  declarations: [StationListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StationListComponent
  ]
})
export class StationsModule { }
