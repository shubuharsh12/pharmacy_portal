import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MedicineListComponent } from "./medicine-list/medicine-list.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "authentication",
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "doctor",
    loadChildren: () =>
      import("./doctor/doctor.module").then((m) => m.DoctorModule),
  },
  {
    path: "medicine-list",
    component: MedicineListComponent,
  },
  {
    path: "representative",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./representative/representative.module").then(
        (m) => m.RepresentativeModule
      ),
  },
  {
    path: "schedule",
    component: ScheduleComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
