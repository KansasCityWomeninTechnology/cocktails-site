import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '@data/heroes';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  @Input() public leaders: Hero[];
  @Input() public mentors: Hero[];

  constructor() { }

  ngOnInit(): void {
  }

}
