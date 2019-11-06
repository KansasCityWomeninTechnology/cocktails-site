import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router, RouterEvent, Scroll } from '@angular/router';
import { Subject } from 'rxjs';

import { NgxPageScrollCoreModule, PageScrollService } from 'ngx-page-scroll-core';
import { ScrollToFragmentDirective } from './scroll-to-fragment.directive';

@Component({
  template: `
      <div appScrollToFragment></div>`
})
class TestComponent {
}

describe('ScrollToFragmentDirective', () => {

  describe('when scroll event', () => {
    let fixture: ComponentFixture<TestComponent>;
    const scrollerServiceFake = jasmine.createSpyObj('PageScrollService', ['scroll']);
    let scrollerServiceSpy: jasmine.Spy;
    const routerEventSub$ = new Subject<Scroll>();
    const routerMock = {
      events: routerEventSub$.asObservable(),
    };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          NgxPageScrollCoreModule,
        ],
        declarations: [ScrollToFragmentDirective, TestComponent],
        providers: [
          {provide: Router, useValue: routerMock},
          {provide: PageScrollService, useValue: scrollerServiceFake}
        ],
      })
        .compileComponents();
    }));

    beforeEach(inject([PageScrollService], (service: PageScrollService) => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      scrollerServiceSpy = service.scroll as jasmine.Spy;
    }));

    it('should scroll when fragment exists', fakeAsync(() => {
      routerEventSub$.next(new Scroll(new NavigationEnd(1, '/a#anchor', '/a#anchor'), null, 'anchor'));

      tick(100);
      expect(scrollerServiceSpy).toHaveBeenCalledWith(jasmine.objectContaining({
        scrollTarget: `#anchor`
      }));
    }));

    it('should not scroll without fragment', fakeAsync(() => {
      routerEventSub$.next(new Scroll(new NavigationEnd(1, '/a', '/b'), null, ''));

      tick(100);
      expect(scrollerServiceSpy).not.toHaveBeenCalled();
    }));
  });

  describe('when other router event', () => {
    let fixture: ComponentFixture<TestComponent>;
    const scrollerServiceFake = jasmine.createSpyObj('PageScrollService', ['scroll']);
    let scrollerServiceSpy: jasmine.Spy;
    const routerEventSub$ = new Subject<RouterEvent>();
    const routerMock = {
      events: routerEventSub$.asObservable(),
    };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          NgxPageScrollCoreModule,
        ],
        declarations: [ScrollToFragmentDirective, TestComponent],
        providers: [
          {provide: Router, useValue: routerMock},
          {provide: PageScrollService, useValue: scrollerServiceFake}
        ],
      })
        .compileComponents();
    }));

    beforeEach(inject([PageScrollService], (service: PageScrollService) => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      scrollerServiceSpy = service.scroll as jasmine.Spy;
    }));

    it('should not scroll when anchor exists', fakeAsync(() => {
      routerEventSub$.next(new NavigationStart(1, '/a#anchor'));
      routerEventSub$.next(new NavigationEnd(1, '/a#anchor', '/a#anchor'));

      tick(100);
      expect(scrollerServiceSpy).not.toHaveBeenCalled();
    }));
  });
});
