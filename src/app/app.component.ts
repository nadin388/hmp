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
  signUp: boolean = false
  newFirstName = ""
  newLastName = ""
  newUsername = ""
  newPassword = ""
  newRepeatPass = ""
  newAcceptTerms: boolean = false

  constructor(private userservice: UserserviceService) {
    this.fname = localStorage.getItem("app_fname") || ""
    this.username = localStorage.getItem("app_username") || ""
  }

  dropdownOpen: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  signUpLabel() {
    this.signUp =!this.signUp;
    if(this.signUp) { 
      this.newFirstName = ""
      this.newLastName = ""
      this.newUsername = ""
      this.newPassword = ""
      this.newRepeatPass = ""
      this.newAcceptTerms = false;
    }
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

  register() {
    if (!this.newFirstName ||!this.newLastName ||!this.newUsername ||!this.newPassword ||!this.newRepeatPass) {
      alert('Please fill out all fields before registering.');
      return;
    }
    if (this.newPassword!== this.newRepeatPass) {
      alert('Passwords do not match.');
      return;
    }
    if(this.newAcceptTerms === true) {
      this.userservice.register(this.newFirstName, this.newLastName, this.newUsername, this.newPassword).subscribe(
        (response: any) => {
          if (response.result === 'success') {
            alert('Account created successfully!');
            this.signUpLabel();
          } else {
            alert(response.message);
          }
        }
      );
    }
    else {
      alert('You must accept the terms and conditions.');
    }

}

}