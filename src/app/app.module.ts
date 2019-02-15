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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StationsModule,
    TagsModule,
    TimetablesModule,
    /*
        ScheduledDispatchesModule,
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
