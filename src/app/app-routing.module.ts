import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationListComponent } from "./stations/station-list/station-list.component";
import { StationsModule } from "./stations/stations.module";

const routes: Routes = [
  {path: 'stations', component: StationListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StationsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
