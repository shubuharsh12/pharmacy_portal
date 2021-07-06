import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MedicineListComponent } from "./medicine-list/medicine-list.component";
import { ScheduleComponent } from "./schedule/schedule.component";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginService } from "./services/login.service";
import { AuthIntercepterService } from "./services/auth-intercepter.service";

@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MedicineListComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    LoginService,
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthIntercepterService,
        multi: true,
      },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
