import { inject, TestBed } from '@angular/core/testing';

import { MailchimpService } from './mailchimp.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpBackend, HttpClient, JsonpClientBackend } from '@angular/common/http';

describe('MailchimpService', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let service: MailchimpService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      { provide: JsonpClientBackend, useExisting: HttpBackend }
    ]
  }));

  beforeEach(inject([HttpClient, HttpTestingController, MailchimpService],
    (h: HttpClient, hm: HttpTestingController, s: MailchimpService) => {
    http = h;
    httpMock = hm;
    service = s;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add form data as parameters', () => {
    const mockResponse = {
      result: 'success',
      msg: 'Hello!'
    };

    const formData = [
      { fieldName: 'TEST', fieldValue: 'thisisatest' }
    ];

    service.submitForm('test?', formData).subscribe(
        response => {
          expect(response).toBeTruthy();
        },
        error => fail('Should be successful')
      );

    const req = httpMock.expectOne(r => r.url === 'test?TEST=thisisatest');
    expect(req.request.method).toEqual('JSONP');
    req.flush(mockResponse);
  });

  it('should return SubscribeResponse when successful', () => {
      const mockResponse = {
        result: 'success',
        msg: 'Hello!'
      };

      service.submitForm('test', []).subscribe(
        response => {
          expect(response).toBeTruthy();
          expect(response.result).toEqual('SUCCESS');
          expect(response.message).toEqual('Hello!');
        },
        error => fail('Should be successful')
      );

      const req = httpMock.expectOne(r => r.url === 'test');
      expect(req.request.method).toEqual('JSONP');
      req.flush(mockResponse);
  });

  it('links in message should include target=_blank when unsuccessful', () => {
    const mockResponse = {
      result: 'error',
      msg: '<a href="https:\/\/kcwomenintech.org">blah<\/a>'
    };

    service.submitForm('test', []).subscribe(
      response => {
        expect(response).toBeTruthy();
        expect(response.result).toEqual('ERROR');
        expect(response.message).toEqual('<a href="https:\/\/kcwomenintech.org" target="_blank">blah<\/a>');
      },
      error => fail('Should be successful')
    );

    const req = httpMock.expectOne(r => r.url === 'test');
    expect(req.request.method).toEqual('JSONP');
    req.flush(mockResponse);
  });
});
