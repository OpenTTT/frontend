import { Component, OnInit } from '@angular/core';
import { StatsService } from "../stats.service";
import { Stats } from "../stats";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: StatsService,
  ) { }

  stats: Stats;

  ngOnInit() {
    this.api.getStats()
      .subscribe(stats => this.stats = stats);
  }

}
