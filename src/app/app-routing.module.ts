import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { JobsComponent } from './Components/jobs/jobs.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';
import { CreateNewJobComponent } from './Components/create-new-job/create-new-job.component';
import { JobListingComponent } from './Components/job-listing/job-listing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'job-details/:jobId',
    component: JobDetailsComponent
  },
  {
    path: 'job-listing',
    component: JobListingComponent
  },
  {
    path: 'new-job',
    component: CreateNewJobComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
