import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardDoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
