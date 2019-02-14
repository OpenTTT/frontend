import { Component, OnInit } from '@angular/core';
import { StatsService } from '@shared/services/stats.service';
import { Stats } from '@shared/model/stats';

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
