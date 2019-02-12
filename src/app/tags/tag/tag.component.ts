import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '@shared/model/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor() { }

  @Input() tag: Tag;

  ngOnInit() {
  }

}
