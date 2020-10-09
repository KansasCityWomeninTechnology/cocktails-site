import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { MentorFormComponent } from './mentor-form.component';
import { MailchimpService } from '../../sign-up-services/mailchimp.service';
import { MentorSubmitResponseComponent } from './mentor-submit-response.component';
import { SubscribeResponse } from '../../sign-up-services/subscribe';
import { environment } from '@env/environment';

describe('MentorFormComponent', () => {
  let component: MentorFormComponent;
  let fixture: ComponentFixture<MentorFormComponent>;

  const mailchimpServiceFake = {
    submitForm: (url, formData) => {
      return of({result: 'SUCCESS', message: 'Hi!'} as SubscribeResponse);
    }
  };
  let serviceSpy: jasmine.Spy;

  const snackBarFake = {
    openFromComponent: (comp, config) => { }
  };
  let snackBarSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
      ],
      declarations: [
        MentorFormComponent
      ],
      providers: [
        { provide: MailchimpService, useValue: mailchimpServiceFake },
        { provide: MatSnackBar, useValue: snackBarFake }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(inject([MailchimpService, MatSnackBar], (service: MailchimpService, snackBar: MatSnackBar) => {
    serviceSpy = spyOn(service, 'submitForm').and.callThrough();
    snackBarSpy = spyOn(snackBar, 'openFromComponent');

    fixture = TestBed.createComponent(MentorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sign up form', () => {
    it('should take email, first name, last name', () => {
      const formGroup: FormGroup = component.signUpForm;
      expect(formGroup.contains('email')).toBeTruthy();
      expect(formGroup.contains('firstName')).toBeTruthy();
      expect(formGroup.contains('lastName')).toBeTruthy();
      expect(formGroup.contains('botField')).toBeTruthy();
    });

    it('should require a valid email address', () => {
      const emailEntry = component.signUpForm.get('email');
      expect(emailEntry.valid).toBeFalsy();
      expect(emailEntry.hasError('required')).toBeTruthy();
      emailEntry.setValue('blah');
      expect(emailEntry.hasError('required')).toBeFalsy();
      expect(emailEntry.hasError('email')).toBeTruthy();
      emailEntry.setValue('email@email.com');
      expect(emailEntry.hasError('email')).toBeFalsy();
      expect(emailEntry.valid).toBeTruthy();
    });

    it('should require a valid first name', () => {
      const firstNameEntry = component.signUpForm.get('firstName');
      expect(firstNameEntry.valid).toBeFalsy();
      expect(firstNameEntry.hasError('required')).toBeTruthy();
      firstNameEntry.setValue('blah');
      expect(firstNameEntry.hasError('required')).toBeFalsy();
      expect(firstNameEntry.valid).toBeTruthy();
    });

    it('should require a valid last name', () => {
      const lastNameEntry = component.signUpForm.get('lastName');
      expect(lastNameEntry.valid).toBeFalsy();
      expect(lastNameEntry.hasError('required')).toBeTruthy();
      lastNameEntry.setValue('blah');
      expect(lastNameEntry.hasError('required')).toBeFalsy();
      expect(lastNameEntry.valid).toBeTruthy();
    });

    it('should not require botField', () => {
      const bot = component.signUpForm.get('botField');
      expect(bot.valid).toBeTruthy();
    });

    it('should require email, first name, and last name', () => {
      expect(component.signUpForm.valid).toBeFalsy();
      component.signUpForm.get('email').setValue('email@email.com');
      component.signUpForm.get('firstName').setValue('Lady');
      component.signUpForm.get('lastName').setValue('Dev');
      expect(component.signUpForm.valid).toBeTruthy();
    });

    it('submit button is disabled when form not valid', () => {
      expect(component.signUpForm.valid).toBeFalsy();
      const button = fixture.debugElement.query(By.css('button'));
      expect(button).toBeTruthy();
      expect(button.nativeElement.disabled).toBeTruthy();
    });
  });

  describe('form submitted', () => {
    it('does nothing if form isn\'t valid', () => {
      expect(component.signUpForm.valid).toBeFalsy();
      component.onSubmit();
      expect(serviceSpy).not.toHaveBeenCalled();
    });

    it('sends form data to service with correct field names', () => {
      const expectedFormData = [
        { fieldName: 'EMAIL', fieldValue: 'email@email.com' },
        { fieldName: 'FNAME', fieldValue: 'Lady' },
        { fieldName: 'LNAME', fieldValue: 'Dev' },
        { fieldName: environment.mentorSignup.bot, fieldValue: '' },
      ];

      component.signUpForm.get('email').setValue('email@email.com');
      component.signUpForm.get('firstName').setValue('Lady');
      component.signUpForm.get('lastName').setValue('Dev');

      component.onSubmit();
      expect(serviceSpy).toHaveBeenCalledWith(environment.mentorSignup.url, expectedFormData);
    });

    it('opens snackbar for 3 seconds when successful', () => {
      component.signUpForm.get('email').setValue('email@email.com');
      component.signUpForm.get('firstName').setValue('Lady');
      component.signUpForm.get('lastName').setValue('Dev');

      component.onSubmit();
      expect(serviceSpy).toHaveBeenCalled();
      expect(snackBarSpy).toHaveBeenCalledWith(MentorSubmitResponseComponent,
        { duration: 3000, data: {result: 'SUCCESS', message: 'Hi!'}});
    });
  });
});
