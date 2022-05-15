import { Component, Inject, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeDatabaseService } from '../employee-database-service.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(
    
    private employeeDatabase: EmployeeDatabaseService, 
    private dialog: MatDialog,
    private parentDialogRef: MatDialogRef<UpdateEmployeeComponent>,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
    
    ) { }



  selectedEmployee: Employee | undefined;

  ngOnInit(): void {

    this.getEmployeeDetails();

  }

  getEmployeeDetails(){

    this.selectedEmployee = Object.assign({}, this.employeeDatabase.getEmployeeByID(this.data.id)) ;

  }


  updateEmployeeDetails(){

    const newEmployeeDetails: Employee = Object.assign({}, this.selectedEmployee);

    let employeeBirthDate: Date = new Date(newEmployeeDetails.employee_birthDate);

    var timeDiff = Math.abs(Date.now() - employeeBirthDate.getTime());
    newEmployeeDetails.employee_age = String(Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25));

    this.employeeDatabase.updateEmployeeDetails(newEmployeeDetails);

  }

  openDialog(myForm: NgForm, type: number){

    let UPDATE = 0;
    let CANCEL = 1;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";

    if(type == UPDATE){

      dialogConfig.data = {

        title: "Update employee details",
        message: "Are you sure you want to update employee details?" ,
        buttonYes: "Update",
        buttonNo: "Cancel"

      }

      let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(result =>{

        if(result == "true"){

          this.updateEmployeeDetails();

          this.parentDialogRef.close();

          let currentUrl = this.route.url;
          this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.route.navigate([currentUrl]);

    });

        }

      })

    }

    if(type == CANCEL){

      if(myForm.dirty){

        dialogConfig.data = {

          title: "Cancel update",
          message: "Are you sure you want to cancel?",
          message2: "Changes will be discarded.",
          buttonYes: "Yes",
          buttonNo: "No"
  
        }
  
        let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
  
        dialogRef.afterClosed().subscribe(result =>{
  
          if(result == "true"){
  
            this.parentDialogRef.close();
  
          }
  
        })

      }else{

        this.parentDialogRef.close();

      }

    }
    

  }

}
