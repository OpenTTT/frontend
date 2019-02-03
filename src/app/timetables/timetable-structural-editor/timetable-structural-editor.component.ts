import {Component, Input, OnInit} from '@angular/core';
import {TimetableEditorComponent} from '../timetable-editor/timetable-editor.component';
import {TimetableService} from '../timetable.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {StationsService} from '../../stations/stations.service';
import {Station} from '../../stations/station';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-timetable-structural-editor',
  templateUrl: './timetable-structural-editor.component.html',
  styleUrls: ['./timetable-structural-editor.component.scss']
})
export class TimetableStructuralEditorComponent extends TimetableEditorComponent implements OnInit {

  constructor(
    api: TimetableService,
    private fb: FormBuilder,
    private stationsApi: StationsService,
  ) {
    super(api);
    this.displayedColumns.push('additionalControls');
  }

  @Input() formGroup: FormGroup;
  @Input() formArray: FormArray;

  filteredStations: string[] = [];
  stations: string[] = [];
  focusedControl: FormControl;
  focusedControlSubscription: Subscription;

  ngOnInit() {
    this.orders = this.formArray.value;
    console.log(this.orders);
    this.stationsApi.getAll().subscribe(
      stations => this.stations = this.filteredStations = stations.map(s => s.name)
    );
  }

  onFocusChanged(rowIndex: number) {
    if (this.focusedControlSubscription) {
      this.focusedControlSubscription.unsubscribe();
    }

    const focusedGroup = this.formArray.controls[rowIndex] as FormGroup;
    this.focusedControl = focusedGroup.controls['destination'] as FormControl;
    this.focusedControl.valueChanges.subscribe(
      value => this.filteredStations = this.stations.filter(s => s.startsWith(value))
    );

    if (this.focusedControl.value !== '') {
      this.filteredStations = this.stations.filter(s => s.startsWith(this.focusedControl.value));
    }
  }

  onRowDeleted(rowIndex: number) {
    this.formArray.removeAt(rowIndex);
    this.refreshBoundOrders();
  }

  onRowUp(rowIndex: number) {
    const group = this.formArray.at(rowIndex);
    this.formArray.removeAt(rowIndex);
    this.formArray.insert(rowIndex - 1, group);

    this.refreshBoundOrders();
  }

  onRowDown(rowIndex: number) {
    const group = this.formArray.at(rowIndex);
    this.formArray.removeAt(rowIndex);
    this.formArray.insert(rowIndex + 1, group);

    this.refreshBoundOrders();
  }

  onSaveRow() {
    // TODO: Should be using validators
    const value = this.formArray.at(this.formArray.length - 1).value;
    if (value.destination && value.stayingTime && value.travelingTime) {
      this.formArray.push(this.fb.group({
        'id': [-1],
        'destination': [''],
        'stayingTime': [''],
        'travelingTime': ['']
      }));
    }

    this.refreshBoundOrders();
  }
  // TODO: Can the table take the formArray directly as a data source or will it explode?
  refreshBoundOrders() {
    this.orders = this.formArray.value;
  }
}
