import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RouterModule, Route, Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  credentials = {
    username: "pharmacy@gmail.com",
    password: "root123456",
  };
  hide: boolean = true;
  email: String = "";
  password: String = "";
  route = "/about";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      if (
        this.credentials.username == this.loginForm.controls.email.value &&
        this.credentials.password == this.loginForm.controls.password.value
      ) {
        this.loginService.generateToken(this.credentials).subscribe(
          (response: any) => {
            this.loginService.loginUser(response.token);
            window.location.href = "/representative";
          },
          (error) => {}
        );
      } else {
        alert("Incorrect Credentials !");
      }
    } else {
      alert("Fields are empty !");
    }
  }

  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  onLogin() {
    if (this.email == "pharmacy@gmail.com" && this.password == "root123456") {
      this.router.navigate(["about"]);
    }
    console.log(this.loginForm.value);
  }
}
