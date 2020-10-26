import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningResourcesComponent } from './learning-resources.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LearningResourcesComponent', () => {
  let component: LearningResourcesComponent;
  let fixture: ComponentFixture<LearningResourcesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningResourcesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
