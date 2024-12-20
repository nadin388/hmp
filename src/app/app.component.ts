import { Component } from '@angular/core'; 
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fname = ""
  username = ""
  password = ""

  constructor(private userservice: UserserviceService) {
    this.fname = localStorage.getItem("app_fname") || ""
    this.username = localStorage.getItem("app_username") || ""
  }

  dropdownOpen: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  login() {
    this.userservice.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.fname = response.fname;
          localStorage.setItem("app_fname", this.fname)
          localStorage.setItem("app_username", this.username)
          localStorage.setItem("app_idmember", response.idmember.toString());
        }
        else {
          alert(response.message)
        }
      });
  }

  logout(){
    this.username=""
    this.fname=""
    this.password=""
    localStorage.removeItem("app_username")
    localStorage.removeItem("app_fname")
    localStorage.removeItem("app_password")
    localStorage.removeItem("app_idmember")
  }

}