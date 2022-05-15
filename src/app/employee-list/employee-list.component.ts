import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeDatabaseService } from '../employee-database-service.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() filterCount: Number = 0;

  employeeList : Employee[] = [];
  public page = 1;
  public pageSize = 5;
  searched : string = '';

  constructor(
    
    private employeeDatabase: EmployeeDatabaseService, 
    private dialog: MatDialog
    
    ) { }

  ngOnInit(): void {

    this.getEmployeeList();
    
  }

  getEmployeeList(){

    this.employeeList = this.employeeDatabase.getEmployeeList();

  }

  deleteEmployee(id: any){

    this.employeeDatabase.deleteEmployee(id);

  }

  onDelete(id: any){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";

    dialogConfig.data = {

      title: "Delete employee",
      message: "Are you sure you want to delete this employee?",
      message2: "Changes cannot be undone.",
      buttonYes: "Delete",
      buttonNo: "Cancel"

    }

    let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result =>{

      if(result == "true"){

        this.deleteEmployee(id);

      }

    })

  }

  onAdd(){

    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.disableClose = true;
    dialogConfigs.autoFocus = true;
    dialogConfigs. width = "60%"

    let dialogRef = this.dialog.open(AddNewEmployeeComponent, dialogConfigs);

    

  }

}
