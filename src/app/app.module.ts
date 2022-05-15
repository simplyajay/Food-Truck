import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';

@NgModule({

  entryComponents: [ConfirmDialogComponent],

  declarations: [
    AppComponent,
    NavigationBarComponent,
    AddNewEmployeeComponent,
    EmployeeDetailsComponent,
    DashboardComponent,
    UpdateEmployeeComponent,
    EmployeeListComponent,
    ConfirmDialogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [

    DatePipe,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
