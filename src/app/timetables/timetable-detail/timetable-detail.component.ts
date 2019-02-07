import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {TimetableService} from '../../shared/services/timetable.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-timetable-detail',
  templateUrl: './timetable-detail.component.html',
  styleUrls: ['./timetable-detail.component.scss']
})
export class TimetableDetailComponent implements OnInit {

  constructor(
    private api: TimetableService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  id: number;
  isNewTimetable = false;
  form = this.fb.group({
    'id': [''],
    'name': ['', Validators.required],
    'orders': this.fb.array([], Validators.minLength(2)),
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id !== 'new') {
        this.id = id;
        this.prepareOrders();
      } else {
        this.isNewTimetable = true;
      }
    });
  }

  private prepareOrders() {
    const ordersArray = this.form.controls['orders'] as FormArray;
    this.api.getTimetable(this.id).subscribe(
      timetable => {
        this.form.patchValue(timetable);

        for (const order of timetable.orders) {
          ordersArray.push(this.fb.group({
            'id': [order.id],
            'destination': [order.destination],
            'travelingTime': [order.travelingTime],
            'stayingTime': [order.stayingTime],
          }));
        }
      }
    );
  }

  save() {
    let observable;
    const timetable = this.form.value;
    if (this.isNewTimetable) {
      observable = this.api.createTimetable(timetable);
    } else {
      observable = this.api.updateTimetable(this.form.value)
    }

    // TODO error handling?
    observable.subscribe(() => this.router.navigate(['/timetables']));
  }
}
