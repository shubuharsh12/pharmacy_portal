import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RepresentativeDoctor } from "../models/representative-doctor";

@Injectable({
  providedIn: "root",
})
export class RepresentativeDoctorService {
  constructor(private httpClient: HttpClient) {}

  getRrepDoc() {
    return this.httpClient.get<RepresentativeDoctor[]>(
      "http://localhost:8084/RepSchedule/2021-11-30"
    );
  }

  getRrepDocByDate(date: any) {
    return this.httpClient.get<RepresentativeDoctor[]>(
      "http://localhost:8084/RepSchedule/" + date
    );
  }
}
