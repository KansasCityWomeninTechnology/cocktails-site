import { NgModule } from '@angular/core';
import { FinancialAidComponent } from './financial-aid/financial-aid.component';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'financialaid', component: FinancialAidComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'signup', redirectTo: '/home#signup', },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
