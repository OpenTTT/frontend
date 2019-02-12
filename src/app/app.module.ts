import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { StationsModule } from './stations/stations.module';
import { ScheduledDispatchesModule } from './scheduled-dispatches/scheduled-dispatches.module';
import { HomeComponent } from './home/home.component';
import {TimetablesModule} from './timetables/timetables.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import { TagsModule } from './tags/tags.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StationsModule,
    ScheduledDispatchesModule,
    TimetablesModule,
    TagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
