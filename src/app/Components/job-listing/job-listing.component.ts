import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  loggedUser: any;
  jobApplications: any;
  ngOnInit(): void {
    this.GetAllJobApplcations();
  }
  constructor(
    private Service: JobService
  ) {
    const localData = localStorage.getItem('JobUserLogin');
    if (localData !== null) {
      this.loggedUser = JSON.parse(localData);
    }
  }

  GetAllJobApplcations() {
    this.Service.GetJobsByEmployerId(this.loggedUser.employerId).subscribe((response: any) => {
      console.log(response.data);
      this.jobApplications = response.data;
      if (response.result) {
        alert("Success get all job applications");
      } else {
        alert("Error get all job applications");
      }
    })
  }
  openJob(id:any){
    this.Service.GetApplcationsByJobId(this.loggedUser).subscribe((response:any)=>{
      console.log(response.data,"opened particular job");
      if(response.result){
        alert("Success OpenJob");
      }else{
        alert("Error OpenJob");
      }
    })

  }

}
