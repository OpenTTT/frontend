import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationListComponent } from './station-list/station-list.component';
import { SharedModule } from '@shared/shared.module';
import { StationCreationComponent } from './station-creation/station-creation.component';
import { IconChevronRight, IconHome, IconPlus, IconSettings } from 'angular-feather';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StationListComponent, StationCreationComponent],
  imports: [
    CommonModule,
    SharedModule,
    IconHome,
    IconSettings,
    IconChevronRight,
    IconPlus,
    ReactiveFormsModule,
  ],
  exports: [
    StationListComponent,
  ],
})
export class StationsModule { }
