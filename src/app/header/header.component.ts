import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  value = "Login";

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      console.log("Login Successfull !");
      this.value = "Logout";
    }
  }

  onAuth() {
    if (this.loginService.isLoggedIn()) {
      this.loginService.logout();
      console.log("Logout Done !");
      this.router.navigate(["authentication"]);
    } else {
      this.router.navigate(["authentication"]);
    }
  }
}
