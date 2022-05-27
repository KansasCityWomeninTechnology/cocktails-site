import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SubscribeResponse, FormData } from './subscribe';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {

  constructor(private jsonp: HttpClient) { }

  public submitForm(url: string, formData: FormData[]): Observable<SubscribeResponse> {
    let params = new HttpParams();
    formData.forEach(d => params = params.set(d.fieldName, d.fieldValue ?? ''));
    url += params.toString();

    return this.jsonp.jsonp<MailChimpResponse>(url, 'c').pipe(
      filter(mcRes => mcRes && !!mcRes.result),
      map( mcRes => {
        const response: SubscribeResponse = {
          result: mcRes.result === 'success' ? 'SUCCESS' : 'ERROR',
          message: mcRes.msg
        };

        // MailChimp response might be already signed up.
        // In that case, MC includes a link to update registration. We want the link to open in a new tab
        const hrefRegexCaptureGroup = /(href="[^"]*")/i;
        if (response.result === 'ERROR' ) {
          response.message = response.message.replace(hrefRegexCaptureGroup, '$1 target="_blank"');
        }
        return response;
      })
    );
  }
}
