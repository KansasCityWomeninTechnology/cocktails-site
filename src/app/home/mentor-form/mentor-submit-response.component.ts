import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SubscribeResponse } from '../../sign-up-services/subscribe';

@Component({
  selector: 'app-mentor-submit-response',
  template: `
    <span [innerHTML]="message"></span>
    <button mat-button *ngIf="showAction" (click)="snackBarRef.dismiss()">Dismiss</button>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  `]
})
export class MentorSubmitResponseComponent {

  public message: SafeHtml;
  public showAction: boolean;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public response: SubscribeResponse,
              public snackBarRef: MatSnackBarRef<MentorSubmitResponseComponent>,
              private sanitizer: DomSanitizer) {
    this.showAction = response.result === 'ERROR';
    this.message = sanitizer.bypassSecurityTrustHtml(response.message);
  }
}
