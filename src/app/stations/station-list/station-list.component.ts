import { Component, OnInit } from '@angular/core';
import { StationsService } from "../stations.service";
import { Station } from "../station";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  constructor(
    private stationsService: StationsService
  ) { }

  stations: Array<Station> = [];

  ngOnInit() {
    this.stationsService.getAll()
      .subscribe(stations => this.stations = stations);
  }

  onStationAdded(station: Station) {
    this.stations.push(station);
  }
}
