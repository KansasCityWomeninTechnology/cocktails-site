import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }
 
  expanded(event: any): void {
    // console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
