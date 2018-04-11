import { NgModule } from '@angular/core';
import { FinancialAidComponent } from './financial-aid/financial-aid.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'financialaid', component: FinancialAidComponent },
  { path: 'resources', component: ResourcesComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
