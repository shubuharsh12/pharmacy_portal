import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RepresentativeRoutingModule } from './representative-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RepresentativeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RepresentativeModule { }
