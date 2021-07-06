import { Component, OnInit } from "@angular/core";
import { Medicine } from "../models/medicine";
import { Pharmacy } from "../models/pharmacy";
import { MedicineService } from "../services/medicine.service";

import { PharmacyService } from "../services/pharmacy.service";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-medicine-list",
  templateUrl: "./medicine-list.component.html",
  styleUrls: ["./medicine-list.component.css"],
})
export class MedicineListComponent implements OnInit {
  medi!: Medicine[];
  pharmacy!: Pharmacy[];

  constructor(
    private pharmacyService: PharmacyService,
    private medicineService: MedicineService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getMedicines();
    this.getPharmacy();
  }

  private getMedicines() {
    this.medicineService.getMedicineList().subscribe((response) => {
      console.log(response);
      this.medi = response;
    });
  }

  private getPharmacy() {
    this.pharmacyService.getPharmacy().subscribe((response) => {
      this.pharmacy = response;
    });
  }
}
