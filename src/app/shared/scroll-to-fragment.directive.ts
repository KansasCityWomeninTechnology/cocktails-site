import { Directive, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PageScrollService } from 'ngx-page-scroll-core';

@Directive({
  selector: '[appScrollToFragment]'
})
export class ScrollToFragmentDirective implements OnInit {

  private navScroll$: Observable<Scroll>;

  constructor(router: Router, private scroller: PageScrollService, @Inject(DOCUMENT) private document:Document) {
    this.navScroll$ = router.events
      .pipe(
        filter(evt => evt instanceof Scroll && !!evt.anchor),
      ) as Observable<Scroll>;
  }

  public ngOnInit(): void {
    // JAD Note- There is a bug when navigating between fragments across 2 different routes with calculating element scroll
    // https://github.com/angular/angular/issues/30139
    // We can work around this by  subscribing to router event and using setTimeout to scroll :(
    this.navScroll$.subscribe( (scroll: Scroll) => {
      setTimeout(() => {
        this.scroller.scroll({ document: this.document, scrollTarget: `#${scroll.anchor}`});
      });
    });
  }
}
