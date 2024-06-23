import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(
    private Service: JobService,
    private router: Router
  ) {}
  loginObj: any = {
    "UserName": "",
    "Password": ""
  }

  login() {
    this.Service.Login(this.loginObj).subscribe((response: any) => {
      console.log(response.data);
      alert("Welcome");
      localStorage.setItem('JobUserLogin', JSON.stringify(response.data));
      this.router.navigateByUrl('/home');
      if (response.result) {
        alert("Success Login");
      } else {
        alert("Error Login");
      }
    })
  }


}
