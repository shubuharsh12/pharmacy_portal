import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  url = "http://localhost:8083";
  constructor(private http: HttpClient) {}

  generateToken(credentials: any) {
    //token generate
    return this.http.post(`${this.url}/token`, credentials);
  }

  loginUser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token == "" || token == null) {
      return false;
    } else {
      return true;
    }
  }

  //for logout user
  logout() {
    localStorage.removeItem("token");
    return true;
  }

  //for getting the token
  getToken() {
    return localStorage.getItem("token");
  }
}
