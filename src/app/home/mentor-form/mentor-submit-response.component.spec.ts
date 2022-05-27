import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

import { MentorSubmitResponseComponent } from './mentor-submit-response.component';

describe('MentorSubmitResponseComponent when response is successful', () => {
  let component: MentorSubmitResponseComponent;
  let fixture: ComponentFixture<MentorSubmitResponseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
      ],
      declarations: [ MentorSubmitResponseComponent ],
      providers: [
        { provide: MatSnackBarRef, useValue: { dismiss: () => {} } },
        { provide: MAT_SNACK_BAR_DATA, useValue: { result: 'SUCCESS', message: 'Hello!' }}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSubmitResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message text', () => {
    expect(component.showAction).toEqual(false);
    expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toEqual('Hello!');
  });

  it('should not include an action button', () => {
    expect(component.showAction).toEqual(false);
    expect(fixture.debugElement.query(By.css('button'))).toBeNull('Button should not display on error');
  });
});

describe('MentorSubmitResponseComponent when response is unsuccessful', () => {
  let component: MentorSubmitResponseComponent;
  let fixture: ComponentFixture<MentorSubmitResponseComponent>;

  const snackBarFake = {
    dismiss: () => {}
  };
  let snackBarSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        MatButtonModule
      ],
      declarations: [ MentorSubmitResponseComponent ],
      providers: [
        { provide: MatSnackBarRef, useValue: snackBarFake },
        { provide: MAT_SNACK_BAR_DATA, useValue: {result: 'ERROR', message: 'Yikes!'}}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(inject([MatSnackBarRef], (snackBarRefFake:any) => {
    snackBarSpy = spyOn(snackBarRefFake, 'dismiss');
    fixture = TestBed.createComponent(MentorSubmitResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should include an action button that dismisses snackbar', () => {
    expect(component.showAction).toEqual(true);
    const el = fixture.debugElement.query(By.css('button'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.textContent).toEqual('Dismiss');
    el.triggerEventHandler('click', null);
    expect(snackBarSpy).toHaveBeenCalledTimes(1);
  });
});
