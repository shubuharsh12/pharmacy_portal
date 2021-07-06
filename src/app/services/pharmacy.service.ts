import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pharmacy } from "../models/pharmacy";

@Injectable({
  providedIn: "root",
})
export class PharmacyService {
  constructor(private httpClient: HttpClient) {}

  getPharmacy() {
    return this.httpClient.get<Pharmacy[]>(
      "http://localhost:8083/PharmacySupply/"
    );
  }

  getPharmacyDemand(id: any, demand: any) {
    console.log("http://localhost:8083/PharmacySupply/" + id + "/" + demand);
    return this.httpClient.get<Pharmacy[]>(
      "http://localhost:8083/PharmacySupply/" + id + "/" + demand
    );
  }
}
