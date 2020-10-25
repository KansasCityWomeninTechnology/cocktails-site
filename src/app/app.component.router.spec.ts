import { waitForAsync, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SpyLocation } from '@angular/common/testing';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { By } from '@angular/platform-browser';
import { FinancialAidComponent } from './financial-aid/financial-aid.component';
import { ResourcesComponent } from './resources/resources.component';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let location: SpyLocation;
let router: Router;

describe('AppComponent Routing & RoutingModule', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        FinancialAidComponent,
        ResourcesComponent
      ],
      providers: [
        { provide: Location, useClass: SpyLocation },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should navigate to Home immediately', fakeAsync(() => {
    createComponent();
    tick();
    const el = fixture.debugElement.query(By.directive(HomeComponent));

    expect(location.path()).toEqual('/');
    expect(el).toBeTruthy();
  }));

  it('should navigate to "Home" when /home', fakeAsync(() => {
    createComponent();
    location.go('/home');
    tick();
    const el = fixture.debugElement.query(By.directive(HomeComponent));

    expect(location.path()).toEqual('/home');
    expect(el).toBeTruthy();
  }));

  it('should navigate to "Resources" when /resource', fakeAsync(() => {
    createComponent();
    location.go('/resources');
    tick();
    const el = fixture.debugElement.query(By.directive(ResourcesComponent));

    expect(location.path()).toEqual('/resources');
    expect(el).toBeTruthy();
  }));

  it('should navigate to "Financial Aid" when /financialaid', fakeAsync(() => {
    createComponent();
    location.go('/financialaid');
    tick();
    const el = fixture.debugElement.query(By.directive(FinancialAidComponent));

    expect(location.path()).toEqual('/financialaid');
    expect(el).toBeTruthy();
  }));

  it('should navigate to "Home" when /doesnotexist', fakeAsync(() => {
    createComponent();
    location.go('/doesnotexist');
    tick();
    const el = fixture.debugElement.query(By.directive(HomeComponent));

    expect(location.path()).toEqual('/');
    expect(el).toBeTruthy();
  }));

  it('/signup should redirect to /home#signup', fakeAsync(() => {
    createComponent();

    location.go('/signup');
    advance();

    const el = fixture.debugElement.query(By.directive(HomeComponent));
    expect(location.path()).toEqual('/home#signup');
    expect(el).toBeTruthy();
  }));
});

function createComponent(): void {
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;

  const injector = fixture.debugElement.injector;
  location = injector.get(Location) as SpyLocation;
  router = injector.get(Router);

  // JAD Note Have to force the router call to run within Angular zone to avoid warnings
  // https://github.com/angular/angular/issues/25837
  fixture.ngZone.run(() => {
    router.initialNavigation();
  });

  advance();
}

function advance(): void {
  tick(); // wait for navigation
  fixture.detectChanges(); // pick up view changes
}

