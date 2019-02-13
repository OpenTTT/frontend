import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TimetableEditorComponent} from '../timetable-editor/timetable-editor.component';
import {TimetableService} from '@shared/services/timetable.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StationsService} from '@shared/services/stations.service';
import {Subscription} from 'rxjs';
import {Station} from '@shared/model/station';

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
  }

  @Input() formGroup: FormGroup;
  @Input() formArray: FormArray;
  @ViewChild('destinationInput') destinationInput: ElementRef;

  newOrderForm = this.fb.group({
    'destination': ['', Validators.required],
    'stayingTime': ['0', Validators.required],
    'travelingTime': ['0', Validators.required],
  });

  // TODO: Autocomplete fun. This should be refactored into it's own component!
  filteredStations: Station[] = [];
  stations: Station[] = [];
  focusedControl: AbstractControl;
  focusedControlSubscription: Subscription;

  stationsByName: {string?: Station} = {};

  ngOnInit() {
    this.orders = this.formArray.value;
    this.stationsApi.getAll().subscribe(
      stations => {
        this.stations = this.filteredStations = stations;
        this.stationsByName = stations.reduce(((map, obj) => {
          map[obj.name] = obj;
          return map;
        }), {});
      }
    );
  }

  onFocusChanged(control: AbstractControl) {
    if (this.focusedControlSubscription) {
      this.focusedControlSubscription.unsubscribe();
    }

    this.focusedControl = control;
    this.focusedControl.valueChanges.subscribe(
      value => this.filteredStations = this.stations.filter(s => s.name.startsWith(value))
    );

    if (this.focusedControl.value !== '') {
      this.filteredStations = this.stations.filter(s => s.name.startsWith(this.focusedControl.value));
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

  addNewStation() {
    if (this.newOrderForm.valid) {
      const newRow = this.newOrderForm.value;
      console.log(this.stationsByName);
      this.formArray.push(this.fb.group({
        'destination': newRow['destination'],
        'stayingTime': {value: newRow['stayingTime']},
        'travelingTime': newRow['travelingTime']
      }));
      this.newOrderForm.setValue({
        'destination': '',
        'stayingTime': '0',
        'travelingTime': '0',
      });
      this.newOrderForm.controls['stayingTime'].enable();
      this.newOrderForm.markAsPristine();
      this.destinationInput.nativeElement.focus();
      this.refreshBoundOrders();
    }
  }

  refreshBoundOrders() {
    this.orders = this.formArray.value;
  }
}
