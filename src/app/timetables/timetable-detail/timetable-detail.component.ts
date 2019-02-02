import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {TimetableService} from '../timetable.service';
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

  id = -1;
  timetableReady = false;
  form = this.fb.group({
    'id': [''],
    'name': ['Unknown Timetable'],
    'orders': this.fb.array([
    ])
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.api.getTimetable(this.id).subscribe(
        timetable => {
          this.form.patchValue(timetable);

          const ordersArray = this.form.controls['orders'] as FormArray;
          for (const order of timetable.orders) {
            ordersArray.push(this.fb.group({
              'id': [order.id],
              'destination': [order.destination],
              'travelingTime': [order.travelingTime],
              'stayingTime': [order.stayingTime],
            }));
          }
          ordersArray.push(this.fb.group({
            'id': [-1],
            'destination': [''],
            'travelingTime': [''],
            'stayingTime': [''],
          }));

          this.timetableReady = true;
        }
      );
    });
  }

  // TODO: Do this with a validator instead
  isValidTimetable(): boolean {
    return true; // TODO: stub
  }

  save() {
    if (this.isValidTimetable()) {
      const timetable = this.form.value;
      // Remove new order item, TODO to be removed
      timetable.orders.pop();
      this.api.updateTimetable(timetable)
        .subscribe(() => this.router.navigate(['/timetables']));
    }
  }
}
