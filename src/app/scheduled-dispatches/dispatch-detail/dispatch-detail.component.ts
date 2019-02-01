import { Component, OnInit } from '@angular/core';
import { ScheduledDispatch } from '../scheduled-dispatch';
import { ActivatedRoute} from '@angular/router';
import { ScheduledDispatchService } from '../scheduled-dispatch.service';
import { ScheduleByStation } from '../schedule-by-station';

@Component({
  selector: 'app-dispatch-detail',
  templateUrl: './dispatch-detail.component.html',
  styleUrls: ['./dispatch-detail.component.scss']
})
export class DispatchDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ScheduledDispatchService,
  ) { }

  id = -1;
  dispatch: ScheduledDispatch;
  numberOfDeparturesDisplayed = 5;
  editMode = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.api.getDispatch(this.id).subscribe(dispatch => this.dispatch = dispatch);
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
