import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {TimetableService} from '@shared/services/timetable.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Tag } from '@shared/model/tag';
import { TagsService } from '@shared/services/tags.service';

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
    private tagApi: TagsService,
  ) { }

  id: number;
  isNewTimetable = false;
  form = this.fb.group({
    'id': [''],
    'name': ['', Validators.required],
    'orders': this.fb.array([], Validators.minLength(2)),
    'tags': this.fb.array([]),
  });

  allTags: Tag[];
  availableTags: Tag[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id !== 'new') {
        this.id = id;
        this.prepare();
      } else {
        this.isNewTimetable = true;
      }
    });

    this.tagApi.getTags().subscribe(tags => {
      this.allTags = tags;
      this.availableTags = this.allTags.filter((t) => {
        const tagIds = this.form.value.tags;
        return tagIds.indexOf(t.id) === -1;
      });
    });
  }

  private prepare() {
    const ordersArray = this.form.controls['orders'] as FormArray;
    this.api.getTimetable(this.id).subscribe(
      timetable => {
        this.form.patchValue(timetable);

        for (const tag of timetable.tags) {
          const tagFormArray = this.form.controls.tags as FormArray;
          tagFormArray.push(this.fb.control(tag.id));
        }
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
    console.log(timetable);
    timetable.tags = timetable.tags.map(id => this.findTagWithId(id));
    console.log(timetable);
    if (this.isNewTimetable) {
      observable = this.api.createTimetable(timetable);
    } else {
      observable = this.api.updateTimetable(timetable);
    }

    // TODO error handling?
    observable.subscribe(() => this.router.navigate(['/timetables']));
  }

  onTagSelectionChange(event: any) {
    const id: number = +event.source.value;
    const formArray = this.form.controls.tags as FormArray;
    formArray.push(this.fb.control(id));
    this.availableTags = this.availableTags.splice(id, 1);
  }

  findTagWithId(id: number): any {
    return this.allTags.find(t => t.id === id);
  }

  removeTag(tagId: number, index: number) {
    const formArray = this.form.controls.tags as FormArray;
    formArray.removeAt(index);
    this.availableTags.push(this.findTagWithId(tagId));
  }
}
