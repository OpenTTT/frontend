import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { StationsService } from "../stations.service";
import { Station } from "../station";
import { Subject } from "rxjs";

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
  @ViewChild("stationName") stationNameInput: ElementRef;

  form = this.fb.group({
    destinationType: ['STATION'],
    name: ['', Validators.required],
  });

  submitValue() {
    if (this.form.valid) {
      this.form.disable();
      // TODO: Proper error handling
      this.api.create(this.form.value)
        .subscribe(
          (station) => {
            this.stationAdded.next(station);
            this.clearForm()
          },
          (error) => {
          this.form.enable();
          console.error(error)
        });
    }
  }

  clearForm() {
    this.form.setValue({'name': '', destinationType: 'STATION'});
    this.form.enable();
    this.stationNameInput.nativeElement.focus();
  }
}
