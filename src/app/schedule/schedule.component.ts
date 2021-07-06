import { Component, OnInit } from "@angular/core";
import { RepresentativeDoctor } from "../models/representative-doctor";
import { HttpClient } from "@angular/common/http";

import { RepresentativeDoctorService } from "../services/representative-doctor.service";

import { FormControl } from "@angular/forms";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"],
})
export class ScheduleComponent implements OnInit {
  repDoc!: RepresentativeDoctor[];

  name = new FormControl("");

  constructor(
    private representaiveDoc: RepresentativeDoctorService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {}

  onSchedule() {
    this.representaiveDoc
      .getRrepDocByDate(this.name.value)
      .subscribe((response) => {
        this.repDoc = response;
      });
  }
}
