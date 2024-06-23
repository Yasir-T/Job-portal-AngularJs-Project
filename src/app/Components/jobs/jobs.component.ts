import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {


  jobsList: any;
  ngOnInit(): void {
    this.GetActiveJobListing();
  }
  constructor(
    private Service: JobService,
    private Router: Router
  ) { }

  GetActiveJobListing() {
    this.Service.GetActiveJobListing().subscribe((response: any) => {
      console.log(response.data, "all jobs list");
      this.jobsList = response.data;
    })
  }
  navigateToDetails(jobId: any) {
    this.Router.navigateByUrl(`job-details/${jobId}`)
  }

}
