import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationListComponent } from "./stations/station-list/station-list.component";
import { StationsModule } from "./stations/stations.module";
import { DispatchListComponent } from "./scheduled-dispatch/dispatch-list/dispatch-list.component";
import { DispatchDetailComponent } from "./scheduled-dispatch/dispatch-detail/dispatch-detail.component";

const routes: Routes = [
  {path: 'stations', component: StationListComponent},
  {path: 'dispatches', component: DispatchListComponent},
  {path: 'dispatches/:id', component: DispatchDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StationsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
