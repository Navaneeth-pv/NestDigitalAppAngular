import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { DeleteSecurityComponent } from './delete-security/delete-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LogEntryComponent } from './log-entry/log-entry.component'

const myRoute:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addEmployee",
    component:AddEmployeeComponent
  },
  {
    path:"searchEmployee",
    component:SearchEmployeeComponent
  },
  {
    path:"viewEmployee",
    component:ViewEmployeeComponent
  },
  {
    path:"editEmployee",
    component:EditEmployeeComponent
  },
  {
    path:"deleteEmployee",
    component:DeleteEmployeeComponent
  },
  {
    path:"addSecurity",
    component:AddSecurityComponent
  },
  {
    path:"viewSecurity",
    component:ViewSecurityComponent
  },
  {
    path:"searchSecurity",
    component:SearchSecurityComponent
  },
  {
    path:"leaveApplication",
    component:LeaveApplicationComponent
  },
  {
    path:"logEntry",
    component:LogEntryComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    NavbarComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    AddSecurityComponent,
    SearchSecurityComponent,
    DeleteSecurityComponent,
    ViewSecurityComponent,
    LeaveApplicationComponent,
    LogEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
