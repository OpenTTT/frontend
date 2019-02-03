import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ScheduledDispatch } from '../scheduled-dispatch';
import { ActivatedRoute} from '@angular/router';
import { ScheduledDispatchService } from '../scheduled-dispatch.service';
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
  dispatch: ScheduledDispatch;
  editMode = true;
  dispatchChange: Subject<any> = new Subject();
  scheduleDispatchForm = this.fb.group({
    'id': this.fb.control(['']),
    'timetable': this.fb.control(['unknown']),
    'timetableId': this.fb.control(['']),
    'intervalInMinutes': this.fb.control(['∞']),
    'departures': this.fb.array([])
  });
  newDepartureControl = this.fb.control(['']);
  numberOfDeparturesDisplayed = this.fb.control(5);
  @ViewChild('newDepartureInput') newDepartureInput: ElementRef;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.api.getDispatch(this.id).subscribe(dispatch => {
        this.scheduleDispatchForm.patchValue(dispatch);
        for (const departure of dispatch.departures) {
          const departureArray = this.scheduleDispatchForm.controls['departures'] as FormArray;
          departureArray.push(this.fb.control(departure));
        }
        this.dispatch = dispatch;
      });
    });
    this.scheduleDispatchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.api.updateScheduledDispatch(this.scheduleDispatchForm.value)
          .subscribe(() => this.dispatchChange.next());
      });
    this.numberOfDeparturesDisplayed.valueChanges
      .subscribe(() => this.dispatchChange.next());
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onTimetableChanges() {
    this.dispatchChange.next();
  }

  addDeparture() {
    (this.scheduleDispatchForm.controls['departures'] as FormArray)
      .push(this.fb.control(this.newDepartureControl.value));
    this.newDepartureControl.setValue('');
  }

  removeDeparture(index: number) {
    const departures = this.scheduleDispatchForm.controls['departures'] as FormArray;
    departures.removeAt(index);
    this.dispatchChange.next();
  }
}
