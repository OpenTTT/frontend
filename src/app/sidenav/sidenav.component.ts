import { Component } from '@angular/core';


interface SidenavLink {
  routerLink: string;
  featherIcon: any;
  linkText: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  displayedLinks: SidenavLink[] = [
    {routerLink: '/home', featherIcon: 'home', linkText: 'Home'},
    {routerLink: '/stations', featherIcon: 'map-pin', linkText: 'Stations'},
    {routerLink: '/tags', featherIcon: 'tag', linkText: 'Tags'},
    {routerLink: '/timetables', featherIcon: 'arrow-down-right', linkText: 'Timetables'},
    {routerLink: '/dispatches', featherIcon: 'clock', linkText: 'Schedules'},
  ];
}
