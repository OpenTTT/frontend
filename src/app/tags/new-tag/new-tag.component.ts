import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TagsService } from '@shared/services/tags.service';
import { Router } from '@angular/router';
import { Tag } from '@shared/model/tag';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.scss']
})
export class NewTagComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private api: TagsService,
    private router: Router,
  ) { }

  newTagForm = this.fb.group({
    'title': ['S-Bahn', Validators.required],
    'primaryColor': ['#006F35', Validators.required],
    'secondaryColor': ['#FFFFFF', Validators.required],
  });

  tag: Tag = {
    title: 'S-Bahn',
    primaryColor: '#006F35',
    secondaryColor: '#FFFFFF',
  };

  ngOnInit() {
    this.newTagForm.valueChanges.subscribe(
      () => this.tag = this.newTagForm.value
    );
  }

  onPrimaryColorChange(color: string) {
    this.newTagForm.patchValue({'primaryColor': color});
  }

  onSecondaryColorChanged(color: string) {
    this.newTagForm.patchValue({'secondaryColor': color});
  }

  onSubmit() {
    if (this.newTagForm.valid) {
      this.api.createTag(this.newTagForm.value)
        .subscribe(() => this.router.navigate(['tags']));
    }
  }
}
