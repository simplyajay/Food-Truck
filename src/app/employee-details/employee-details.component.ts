import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeDatabaseService } from '../employee-database-service.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    
    private employeeDatabase: EmployeeDatabaseService, 
    private route: ActivatedRoute, 
    private dialog: MatDialog,

    ) { }

  ngOnInit(): void {

    this.getEmployeeDetails();

  }

  selectedEmployee: Employee | undefined;

  getEmployeeDetails(){

    const id =  String(this.route.snapshot.paramMap.get('id'));
    this.selectedEmployee = this.employeeDatabase.getEmployeeByID(id);

  }

  onUpdate(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig. width = "60%"
    dialogConfig.data = {

      id: this.selectedEmployee?.employee_ID

    }

    let dialogRef = this.dialog.open(UpdateEmployeeComponent, dialogConfig);

  }



}
