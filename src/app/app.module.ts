import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CreateNewJobComponent } from './Components/create-new-job/create-new-job.component';
import { HomeComponent } from './Components/home/home.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';
import { JobListingComponent } from './Components/job-listing/job-listing.component';
import { JobsComponent } from './Components/jobs/jobs.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { MyJobsComponent } from './Components/my-jobs/my-jobs.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateNewJobComponent,
    HomeComponent,
    JobDetailsComponent,
    JobListingComponent,
    JobsComponent,
    LoginComponent,
    RegistrationComponent,
    MyJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
