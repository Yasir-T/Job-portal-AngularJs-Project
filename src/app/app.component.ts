import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  isLoggedUser: boolean = false;
  loggedUser: any;

  ngOnInit(): void {
    this.loggedDetails();
  }
  constructor() { }

  loggedDetails() {
    const localData = localStorage.getItem('JobUserLogin');
    if (localData == null) {
      this.isLoggedUser = false;
    } else {
      this.isLoggedUser = true;
      this.loggedUser = JSON.parse(localData);
      console.log(this.loggedUser, "loggeduserdetails");
    }
  }
  logOff() {
    localStorage.removeItem('JobUserLogin');
    alert("byeee");
    this.isLoggedUser = false;
  }
}
