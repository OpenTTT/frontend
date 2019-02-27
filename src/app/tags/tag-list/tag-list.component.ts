import { Component, OnInit } from '@angular/core';
import { TagsService } from '@shared/services/tags.service';
import { Tag } from '@shared/model/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  constructor(private api: TagsService) { }

  tags: Tag[] = [];

  ngOnInit() {
    this.api.getTags().subscribe(tags => this.tags = tags);
  }

}
