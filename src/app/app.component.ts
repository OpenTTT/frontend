import { Component } from '@angular/core';

interface SidenavLink {
  routerLink: string;
  featherIcon: any;
  linkText: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedLinks: SidenavLink[] = [
    {routerLink: '/home', featherIcon: 'home', linkText: 'Home'},
    {routerLink: '/stations', featherIcon: 'map-pin', linkText: 'Stations'},
    {routerLink: '/tags', featherIcon: 'tag', linkText: 'Tags'},
    {routerLink: '/timetables', featherIcon: 'tag', linkText: 'Timetables'},
    {routerLink: '/dispatches', featherIcon: 'tag', linkText: 'Schedules'},
  ];
}
