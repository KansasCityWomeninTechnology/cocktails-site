import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MapModule } from './shared/map/map.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FinancialAidComponent } from './financial-aid/financial-aid.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MentorFormComponent } from './mentor-form/mentor-form.component';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { MentorSubmitResponseComponent } from './mentor-form/mentor-submit-response.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FinancialAidComponent,
    ResourcesComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    HeroComponent,
    MentorFormComponent,
    MentorSubmitResponseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    MapModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    NgxPageScrollModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  entryComponents: [
    MentorSubmitResponseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
