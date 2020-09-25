import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupService } from './signup.service';
import { Signup } from './Signup';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import bootstrap from 'bootstrap';


import { InstituteLoginComponent } from './institute-login/institute-login.component';




import { StudentLoginComponent } from './student-login/student-login.component';

import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarLandingPageComponent } from './navbar-landing-page/navbar-landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpStudentComponent } from './sign-up-student/sign-up-student.component';
import { SignUpInstituteComponent } from './sign-up-institute/sign-up-institute.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentScholarshipFormComponent } from './student-scholarship-form/student-scholarship-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { OfficerDashboardComponent } from './officer-dashboard/officer-dashboard.component';
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';
import { MinistryDashboardComponent } from './ministry-dashboard/ministry-dashboard.component';
import { InstituteApplicationComponent } from './institute-application/institute-application.component';
import { StudentTrackApplicationStatusComponent } from './student-track-application-status/student-track-application-status.component';
import { InstituteTrackApplicationStatusComponent } from './institute-track-application-status/institute-track-application-status.component';
import { StudentDashboardNavBarComponent } from './student-dashboard-nav-bar/student-dashboard-nav-bar.component';
import { InstituteDashboardNavBarComponent } from './institute-dashboard-nav-bar/institute-dashboard-nav-bar.component';
import { OfficerDashboardNavBarComponent } from './officer-dashboard-nav-bar/officer-dashboard-nav-bar.component';
import { MinistryDashboardNavBarComponent } from './ministry-dashboard-nav-bar/ministry-dashboard-nav-bar.component';
import { TrialComponent } from './trial/trial.component';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    InstituteLoginComponent,
    
    StudentLoginComponent,
    NodalLoginComponent,
    MinistryLoginComponent,
    LandingPageComponent,
    AboutUsComponent,
    NavbarLandingPageComponent,
    SignUpComponent,
    SignUpStudentComponent,
    SignUpInstituteComponent,
    RegisterStudentComponent,
    StudentScholarshipFormComponent,
    StudentDashboardComponent,
    OfficerDashboardComponent,
    InstituteDashboardComponent,
    MinistryDashboardComponent,
    InstituteApplicationComponent,
    StudentTrackApplicationStatusComponent,
    InstituteTrackApplicationStatusComponent,
    StudentDashboardNavBarComponent,
    InstituteDashboardNavBarComponent,
    OfficerDashboardNavBarComponent,
    MinistryDashboardNavBarComponent,
    TrialComponent 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  
    
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
