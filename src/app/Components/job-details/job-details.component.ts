import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobId: any;
  jobList: any;
  isLoggedUser: any;
  loggedUser: any;

  sendjobObj: any = {
    "ApplicationId": 0,
    "JobId": 0,
    "JobSeekerId": 0,
    "AppliedDate": new Date(),
    "ApplcationStatus": "New"
  }
  ngOnInit(): void {
    this.loggedDetails();
  }

  constructor(
    private Service: JobService,
    private ActivateRoute: ActivatedRoute
  ) {
    this.ActivateRoute.params.subscribe((response: any) => {
      console.log(response);
      this.jobId = response.jobId;
      this.GetJobListingById();
      this.sendjobObj.JobId=this.jobId;
    })
  }

  loggedDetails() {
    const localData = localStorage.getItem('JobUserLogin');
    if (localData == null) {
      this.isLoggedUser = false;
    } else {
      this.isLoggedUser = true;
      this.loggedUser = JSON.parse(localData);
      this.sendjobObj.JobSeekerId=this.loggedUser.jobSeekerId;
      console.log(this.loggedUser, "loggeduserdetails");
    }
  }


  GetJobListingById() {
    this.Service.GetJobListingById(this.jobId).subscribe((response: any) => {
      console.log(response.data);
      this.jobList = response.data;
    })
  }
  SendJobApplication(){
    this.Service.SendJobApplication(this.sendjobObj).subscribe((response:any)=>{
      console.log(response.data);
      if(response.result){
        alert("Success AppliedJob");
      }else{
        alert("Error appliedJob")
      }
      
    })
  }

}
