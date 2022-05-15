import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { EMPLOYEELIST } from './EmployeeList';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDatabaseService {

  constructor() { }

  getEmployeeList():Employee[]{

    return EMPLOYEELIST;

  }

  getEmployeeByID(id:string){

    const employee = EMPLOYEELIST.find(e => e.employee_ID === id);
    return employee;

  }

  addNewEmployee(newEmployee: Employee){

    EMPLOYEELIST.push(newEmployee);

  }

  updateEmployeeDetails(employee: Employee){

    const foundIndex = EMPLOYEELIST.findIndex(e => e.employee_ID === employee.employee_ID );
    EMPLOYEELIST[foundIndex] = employee;

  }

  deleteEmployee(id: string){

    for(var i = 0; i < EMPLOYEELIST.length; i++){

      if(EMPLOYEELIST[i]["employee_ID"] == id){

        EMPLOYEELIST.splice(i,1);

      }

    }

  }

}
