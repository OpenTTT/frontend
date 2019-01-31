import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchListComponent } from './dispatch-list/dispatch-list.component';
import { SharedModule } from "../shared/shared.module";
import { MatListModule, MatTableModule } from "@angular/material";
import { DispatchDetailComponent } from './dispatch-detail/dispatch-detail.component';

@NgModule({
  declarations: [DispatchListComponent, DispatchDetailComponent],
  imports: [
    CommonModule,
    SharedModule,

    MatListModule,
    MatTableModule,
  ],
  exports: [DispatchListComponent, DispatchDetailComponent],
})
export class ScheduledDispatchModule { }
