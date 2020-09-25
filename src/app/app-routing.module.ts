import { AboutUsComponent } from './about-us/about-us.component';
import { MinistryDashboardComponent } from './ministry-dashboard/ministry-dashboard.component';
import { OfficerDashboardComponent } from './officer-dashboard/officer-dashboard.component';
import { InstituteApplicationComponent } from './institute-application/institute-application.component';
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';
import { StudentScholarshipFormComponent } from './student-scholarship-form/student-scholarship-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes:Routes=[{path:'',component:LandingPageComponent},
  {path:'institute',component:InstituteLoginComponent},
  { path:'signup', component:SignUpComponent},
  { path:'studentDashboard', component:StudentDashboardComponent},
  { path:'studentRegistrationForm', component:StudentScholarshipFormComponent },
  { path:'instituteDashboard', component:InstituteDashboardComponent },
  { path:'instituteRegistrationForm', component: InstituteApplicationComponent },
  { path:'officerDashboard', component: OfficerDashboardComponent },
  { path:'ministryDashboard', component:MinistryDashboardComponent },
  {path:'aboutus',component:AboutUsComponent}
  
  


]

@NgModule({
  declarations: [],

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
