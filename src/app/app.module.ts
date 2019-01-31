import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StationsModule } from './stations/stations.module';
import { ScheduledDispatchModule } from './scheduled-dispatch/scheduled-dispatch.module';
import { HomeComponent } from './home/home.component';

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
    ScheduledDispatchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
