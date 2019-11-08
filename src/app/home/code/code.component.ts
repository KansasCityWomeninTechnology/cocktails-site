import { Component, Input, OnInit } from '@angular/core';
import { Tool } from '@data/about';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() public tools: Tool[];

  constructor() { }

  ngOnInit(): void {
  }

}
