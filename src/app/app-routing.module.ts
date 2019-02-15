import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StationListComponent } from './stations/station-list/station-list.component';
import { TagListComponent } from './tags/tag-list/tag-list.component';
import { NewTagComponent } from './tags/new-tag/new-tag.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'stations', component: StationListComponent},
  {path: 'tags', component: TagListComponent},
  {path: 'tags/new', component: NewTagComponent},
  /*
  {path: 'dispatches', component: DispatchListComponent},
  {path: 'dispatches/new', component: NewScheduledDispatchComponent},
  {path: 'dispatches/:id', component: DispatchDetailComponent},
  {path: 'timetables', component: TimetableListComponent},
  {path: 'timetables/:id', component: TimetableDetailComponent},
 */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
