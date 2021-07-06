import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';
import{ CarouselModule} from 'ngx-bootstrap/carousel'


@NgModule({
  declarations: [
    DashboardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule.forRoot()
  ]
})
export class MainModule { }
