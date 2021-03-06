import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityAddComponent } from './facility-add/facility-add.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'facilities',
    component: FacilitiesComponent
  },
  {
    path: 'facilities/add',
    component: FacilityAddComponent
  },
  {
    path: 'facilities/details/:id',
    component: FacilityComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
