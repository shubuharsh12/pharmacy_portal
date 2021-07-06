import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';


@NgModule({
  declarations: [
    DashboardDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
