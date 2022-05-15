import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../Employee';
import { EMPLOYEELIST } from '../EmployeeList';
import { EmployeeDatabaseService } from '../employee-database-service.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  constructor(

    private employeeDatabase: EmployeeDatabaseService,
    private dialog: MatDialog,
    private parentDialogRef: MatDialogRef<AddNewEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    ) { }

  newEmployee: Employee = new Employee(this.generateID(), "", "", "", "", new Date(), "", "", "", "", "", "", "", "", "", );

  url = "/assets/Images/test.png";

  ngOnInit(): void {


  }

  generateID(): string{

    let IDSuffix: number = 1;

    for(var i = 0; i < EMPLOYEELIST.length; i++){

      let comparator: number = parseInt(EMPLOYEELIST[i].employee_ID.substring(7));
    
      if(comparator === IDSuffix){

        IDSuffix++;

      }

    }

    let generatedID : string = "E-" + new Date().getFullYear() + "-" + IDSuffix;

    return generatedID;

  }

  calculateAge(){

    let employeeBirthDate: Date = new Date(this.newEmployee.employee_birthDate);

    var timeDiff = Math.abs(Date.now() - employeeBirthDate.getTime());
    this.newEmployee.employee_age = String(Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25));

  }

  submitForm(myForm: NgForm, type: number){

    this.openDialog(myForm, type);


    //reset form except for ID field and gender Field
    
  }

  cancelForm(myForm: NgForm, type: number){

    this.openDialog(myForm, type);
      
  }

  addNewEmployee(){

    this.calculateAge();

    this.employeeDatabase.addNewEmployee(this.newEmployee);

    this.newEmployee = new Employee(this.generateID(), "", "", "", "", new Date(), "", "", "", "", "", "", "", "", "", );

  } 

  openDialog(myForm: NgForm, type: number){

    let ADD = 0;
    let CANCEL = 1;
  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
  
    if(type == ADD){
  
      dialogConfig.data = {
  
        title: "Add new employee",
        message: "Are you sure you want to add new employee?" ,
        buttonYes: "Yes",
        buttonNo: "No"
  
      }
  
      let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result =>{
  
        if(result == "true"){
  
          this.addNewEmployee();
          this.parentDialogRef.close();
          console.log("test");
  
        }
  
      })
  
    }
  
    if(type == CANCEL){

      if(myForm.dirty){

        dialogConfig.data = {
  
          title: "Cancel add",
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
