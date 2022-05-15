import {  Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Employee';
import { EMPLOYEELIST } from './EmployeeList';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Employee[], searchString: string){

    if(searchString === ''){

      return value;

    }

    const employees = [];

    for(const emplys of EMPLOYEELIST){

      let fullName = emplys['employee_firstName'] + " " + emplys["employee_lastName"];

      if(fullName.toLocaleLowerCase().match(searchString.toLocaleLowerCase())){

        employees.push(emplys);

      }

    }
    

    return employees;

  }

}
