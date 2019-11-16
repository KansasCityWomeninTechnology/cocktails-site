import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsComponent } from './cocktails.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CocktailsComponent', () => {
  let component: CocktailsComponent;
  let fixture: ComponentFixture<CocktailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
