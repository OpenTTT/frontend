import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Timetable} from '../../timetables/timetable';
import {TimetableService} from '../../timetables/timetable.service';
import {ScheduledDispatchService} from '../scheduled-dispatch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-scheduled-dispatch',
  templateUrl: './new-scheduled-dispatch.component.html',
  styleUrls: ['./new-scheduled-dispatch.component.scss']
})
export class NewScheduledDispatchComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private timetableApi: TimetableService,
              private scheduleApi: ScheduledDispatchService,
              private router: Router,
  ) { }

  timetables: Timetable[] = [];
  newScheduledDispatchForm = this.fb.group({
    'timetable': ['', Validators.required]
  });

  ngOnInit() {
    this.timetableApi.getTimetables()
      .subscribe(timetables => this.timetables = timetables);
  }

  saveScheduledDispatch() {
    this.scheduleApi.createScheduledDispatch({
      id: null,
      timetable: null,
      timetableId: this.newScheduledDispatchForm.value['timetable'],
      departures: [
        0,
        30,
      ],
      intervalInMinutes: 60
    }).subscribe(
      (sd) => this.router.navigate(['/dispatches/', sd.id])
    );
  }
}
