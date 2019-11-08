import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '@data/sessions';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  @Input() public topics: Topic[];

  constructor() { }

  public ngOnInit(): void {
  }

}
