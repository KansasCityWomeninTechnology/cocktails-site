import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FinancialAidComponent } from './financial-aid/financial-aid.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';

import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './/app-routing.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AgmCoreModule } from '@agm/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        FinancialAidComponent,
        ResourcesComponent,
        HomeComponent,
        FooterComponent,
        ContactComponent,
        HeroComponent
      ],
      imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        AppRoutingModule,
        Ng2PageScrollModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyASRlFMsqIDTO_2ebxq7gjOzR5nOjzItnE'
        })
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Coding & Cocktails by Kansas City Women in Technology'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Coding & Cocktails by Kansas City Women in Technology');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Kansas City Women in Technology');
  }));
});
