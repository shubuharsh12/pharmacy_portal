import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Medicine } from "../models/medicine";

@Injectable({
  providedIn: "root",
})
export class MedicineService {
  constructor(private httpClient: HttpClient) {}

  getMedicineList() {
    return this.httpClient.get<Medicine[]>(
      "http://localhost:8082/MedicineStockInformation/"
    );
  }
}
