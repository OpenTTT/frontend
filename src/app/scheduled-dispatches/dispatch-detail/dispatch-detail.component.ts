import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ScheduledDispatch } from '../../shared/model/scheduled-dispatch';
import { ActivatedRoute} from '@angular/router';
import { ScheduledDispatchService } from '../../shared/services/scheduled-dispatch.service';
import {Subject} from 'rxjs';
import {FormArray, FormBuilder} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-dispatch-detail',
  templateUrl: './dispatch-detail.component.html',
  styleUrls: ['./dispatch-detail.component.scss']
})
export class DispatchDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ScheduledDispatchService,
    private fb: FormBuilder,
  ) { }

  id = -1;
  dispatch: ScheduledDispatch = null;
  dispatchChange: Subject<any> = new Subject();
  numberOfDeparturesDisplayed = this.fb.control(5);

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.api.getDispatch(this.id).subscribe(dispatch => {
        this.dispatch = dispatch;
      });
    });
    this.numberOfDeparturesDisplayed.valueChanges
      .subscribe(() => this.dispatchChange.next());
  }

  onTimetableChanges() {
    this.dispatchChange.next();
  }

}
