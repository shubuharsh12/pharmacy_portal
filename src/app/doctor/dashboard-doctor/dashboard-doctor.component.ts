import { Component, OnInit } from "@angular/core";
import { RepresentativeDoctor } from "../../models/representative-doctor";
import { HttpClient } from "@angular/common/http";

import { RepresentativeDoctorService } from "../../services/representative-doctor.service";

@Component({
  selector: "app-dashboard-doctor",
  templateUrl: "./dashboard-doctor.component.html",
  styleUrls: ["./dashboard-doctor.component.css"],
})
export class DashboardDoctorComponent implements OnInit {
  repDoc!: RepresentativeDoctor[];

  constructor(
    private representaiveDoc: RepresentativeDoctorService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getRepDocList();
  }

  private getRepDocList() {
    this.representaiveDoc.getRrepDoc().subscribe((response) => {
      this.repDoc = response;
    });
  }
}
