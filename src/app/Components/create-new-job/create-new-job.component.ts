import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent implements OnInit {

  categoriList: any
  loggedUser: any;


  ngOnInit(): void {
    this.GetAllJobCategory();
  }
  constructor(
    private Service: JobService
  ) {
    const localData = localStorage.getItem('JobUserLogin');
    if (localData != null) {
      const data = JSON.parse(localData);
      this.createJobObj.EmployerId=data.employerId;
    }
  }

  createJobObj: any = {
    "JobId": 0,
    "JobName": "",
    "CreatedDate": new Date(),
    "EmployerId": 0,
    "CategoryId": 0,
    "Location": "",
    "JobDescription": "",
    "Experience": "",
    "Package": "",
    "IsActive": true
  }

  createNewJob() {
    this.Service.CreateNewJobListing(this.createJobObj).subscribe((response: any) => {
      console.log(response.data);
      if (response.result) {
        alert("Success jobalert");
      } else {
        alert("Error jobalert");
      }
    })

  }
  GetAllJobCategory() {
    this.Service.GetAllJobCategory().subscribe((response: any) => {
      console.log(response.data, "all job category");
      this.categoriList = response.data;

    })
  }

}
