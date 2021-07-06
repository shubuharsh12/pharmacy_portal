import { Component, OnInit } from "@angular/core";
import { PharmacyService } from "../../services/pharmacy.service";
import { Pharmacy } from "../../models/pharmacy";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  pharmacy!: Pharmacy[];
  pharmacyList!: Pharmacy[];

  demand = new FormControl("");
  id = new FormControl("");

  constructor(
    private pharmacyService: PharmacyService,
    private http: HttpClient,
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPharmacy();
  }

  form = this.fb.group({ demand: new FormControl("") });

  private getPharmacy() {
    this.pharmacyService.getPharmacy().subscribe((response) => {
      this.pharmacy = response;
    });
  }

  onDemand(id: any) {
    this.pharmacyService
      .getPharmacyDemand(id, this.form.value.demand)
      .subscribe((response) => {
        this.pharmacyList = response;
      });
  }
}
