import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from '@env/environment';
import { MailchimpService } from '../../sign-up-services/mailchimp.service';
import { MentorSubmitResponseComponent } from './mentor-submit-response.component';
import { SubscribeResponse } from '../../sign-up-services/subscribe';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.scss']
})
export class MentorFormComponent implements OnInit {

  public signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    botField: new FormControl('')
  });

  constructor(private service: MailchimpService, private snackBar: MatSnackBar) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if (!this.signUpForm.valid) {
      return;
    }

    this.service.submitForm(environment.mentorSignup.url, [
      { fieldName: 'EMAIL', fieldValue: this.signUpForm.get('email')?.value },
      { fieldName: 'FNAME', fieldValue: this.signUpForm.get('firstName')?.value },
      { fieldName: 'LNAME', fieldValue: this.signUpForm.get('lastName')?.value },
      { fieldName: environment.mentorSignup.bot, fieldValue: this.signUpForm.get('botField')?.value },
    ]).subscribe(
      (r: SubscribeResponse) => {
        const duration = r.result === 'SUCCESS' ? 3000 : 5000;
        this.snackBar.openFromComponent(MentorSubmitResponseComponent, { duration, data: r });
      }
    );
  }
}
