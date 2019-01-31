import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationListComponent } from './stations/station-list/station-list.component';
import { StationsModule } from './stations/stations.module';
import { DispatchListComponent } from './scheduled-dispatches/dispatch-list/dispatch-list.component';
import { DispatchDetailComponent } from './scheduled-dispatches/dispatch-detail/dispatch-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
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
