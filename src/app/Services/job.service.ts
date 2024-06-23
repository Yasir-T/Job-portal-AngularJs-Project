import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private Http: HttpClient) { }
  path: any = 'https://freeapi.miniprojectideas.com/api/JobPortal/';

  AddNewEmployer(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'AddNewEmployer', Obj);
  }

  AddNewJobSeeker(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'AddNewJobSeeker', Obj);
  }

  Login(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'Login', Obj);
  }

  CreateNewJobListing(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'CreateNewJobListing', Obj);
  }

  SendJobApplication(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'SendJobApplication', Obj);
  }

  GetActiveJobListing(): Observable<any> {
    return this.Http.get<any>(this.path + 'GetActiveJobListing');
  }

  GetJobListingById(jobId: any): Observable<any> {
    return this.Http.get<any>(this.path + 'GetJobListingById?jobId=' + jobId);
  }

  GetJobsByEmployerId(employerId: any): Observable<any> {
    return this.Http.get<any>(this.path + 'GetJobsByEmployerId?employerId=' + employerId);
  }

  GetApplcationsByJobId(employerId: any): Observable<any> {
    return this.Http.get<any>(this.path + 'GetApplcationsByJobId?employerId=' + employerId);
  }

  GetAllJobCategory(): Observable<any> {
    return this.Http.get<any>(this.path + 'GetAllJobCategory');
  }



}
