import { Component } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fname=""
  username=""
  password=""

  constructor(private userservice: UserserviceService) {
    this.fname=localStorage.getItem("app_fname") || ""
    this.username=localStorage.getItem("app_username") || ""

    defineCustomElements(window)
  }

  dropdownOpen:boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  login()
{
   this.userservice.login(this.username,this.password).subscribe(
     (response: any) => {
        if(response.result==='success'){
          alert("success")
          this.fname=response.fname;
          localStorage.setItem("app_fname",this.fname)
          localStorage.setItem("app_username",this.username)
         }
         else
         {
            alert(response.message)
         }
  });
}

}
