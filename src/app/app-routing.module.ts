import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [

  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'employee-list', component: EmployeeListComponent},
  {path:'employee-details/:id', component:EmployeeDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = {DashboardComponent, EmployeeListComponent, EmployeeDetailsComponent}
