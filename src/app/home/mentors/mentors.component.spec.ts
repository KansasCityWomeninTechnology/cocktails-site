import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorsComponent } from './mentors.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MentorsComponent', () => {
  let component: MentorsComponent;
  let fixture: ComponentFixture<MentorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
