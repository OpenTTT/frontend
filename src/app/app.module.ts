import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { StationsModule } from './stations/stations.module';
import { TagsModule } from './tags/tags.module';
import { TimetablesModule } from './timetables/timetables.module';
import { ScheduledDispatchesModule } from './scheduled-dispatches/scheduled-dispatches.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IconArrowDownRight, IconClock, IconHelpCircle, IconHome, IconMapPin, IconTag } from 'angular-feather';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StationsModule,
    TagsModule,
    TimetablesModule,
    ScheduledDispatchesModule,
    IconHome,
    IconClock,
    IconHelpCircle,
    IconMapPin,
    IconTag,
    IconArrowDownRight,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
