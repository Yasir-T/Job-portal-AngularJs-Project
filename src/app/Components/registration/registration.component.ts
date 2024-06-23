import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isJobSeeker!: boolean;
  ngOnInit(): void {

  }
  constructor(
    private Service: JobService
  ) { }

  jobSeekerObj: any = {
    "JobSeekerId": 0,
    "FullName": "",
    "EmailId": "",
    "MobileNo": "",
    "ExperienceStatus": "",
    "ResumeUrl": "",
    "JobSeekerSkills": [],
    "JobSeekerWorkExperiences": []
  }

  registerObj: any = {
    "EmployerId": 0,
    "CompanyName": "",
    "EmailId": "",
    "MobileNo": "",
    "PhoneNo": "",
    "CompanyAddress": "",
    "City": "",
    "State": "",
    "PinCode": "",
    "LogoURL": "",
    "GstNo": ""
  }

  AddNewEmployer() {
    this.Service.AddNewEmployer(this.registerObj).subscribe((response: any) => {
      console.log(response.data);
      if (response.result) {
        alert("Success AddNewEmployer");
      } else {
        alert("Error AddNewEmployer");
      }
    })
  }

  AddNewJobSeeker() {
    this.Service.AddNewJobSeeker(this.jobSeekerObj).subscribe((response: any) => {
      console.log(response.data);
      if (response.result) {
        alert("Success AddNewEmployer");
      } else {
        alert("Error AddNewEmployer");
      }
    })
  }

}
