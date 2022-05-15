import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    
    @Inject(MAT_DIALOG_DATA) public data: any,
    public updateParentDialog: MatDialogRef<UpdateEmployeeComponent>,
    public addParentDialog: MatDialogRef<AddNewEmployeeComponent>,

    ) { }

  ngOnInit(): void {
  }



}
