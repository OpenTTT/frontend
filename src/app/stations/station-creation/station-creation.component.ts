import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StationsService } from '@shared/services/stations.service';
import { Station } from '@shared/model/station';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-station-creation',
  templateUrl: './station-creation.component.html',
  styleUrls: ['./station-creation.component.scss']
})
export class StationCreationComponent {

  constructor(
    private fb: FormBuilder,
    private api: StationsService,
  ) { }

  @Output() stationAdded: Subject<Station> = new Subject();
  @ViewChild('stationName') stationNameInput: ElementRef;

  form = this.fb.group({
    name: ['', Validators.required],
    destinationType: ['STATION'],
  });

  submitValue() {
    if (this.form.valid) {
      this.form.disable();
      this.api.create(this.form.value).subscribe(this.onStationCreated);
    }
  }

  private onStationCreated(station) {
    this.stationAdded.next(station);
    this.clearForm();
  }

  clearForm() {
    this.form.setValue({'name': '', destinationType: 'STATION'});
    this.form.enable();
    this.stationNameInput.nativeElement.focus();
  }
}
