import { Employee } from "./Employee";
import { EmployeeDatabaseService } from "./employee-database-service.service";

export class EmployeeList {

    public updateList(list: Employee[]){

        EMPLOYEELIST = list;

    }

}

export var EMPLOYEELIST: Employee[] = [

    {employee_ID:"E-2021-1", employee_firstName:"Jonathan", employee_middleName:"Boogeyman", employee_lastName:"wick", employee_gender:"Male",
     employee_birthDate: new Date("1999-10-06"), employee_age:"21", employee_contactNumber:"09123456789", employee_emailAddress:"johnwick@g.cjc.edu.ph", 
     employee_city:"Digos City", employee_province:"Davao del Sur", employee_country:"Philippines", employee_officeAssignment:"IT Department", 
     employee_position:"Intern", employee_monthlySalary:"15000"},

    {employee_ID:"E-2021-2", employee_firstName:"Andres", employee_middleName:"De", employee_lastName:"Fonollosa", employee_gender:"Male", 
    employee_birthDate: new Date("2000-06-23") , employee_age:"21", employee_contactNumber:"09234567891", employee_emailAddress:"andres@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Accounting", 
    employee_position:"Intern", employee_monthlySalary:"18000"},

    {employee_ID:"E-2021-3", employee_firstName:"Jon", employee_middleName:"Stark", employee_lastName:"Targaryen", employee_gender:"Male", 
    employee_birthDate: new Date("1999-06-10") , employee_age:"22", employee_contactNumber:"09234567892", employee_emailAddress:"thelastdragon@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"IT Department", 
    employee_position:"Intern", employee_monthlySalary:"15000"},

    {employee_ID:"E-2021-4", employee_firstName:"Darius", employee_middleName:"Evans", employee_lastName:"Kincaid", employee_gender:"Male", 
    employee_birthDate: new Date("2003-05-03") , employee_age:"18", employee_contactNumber:"09234567893", employee_emailAddress:"dariuskincaid@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Staff", 
    employee_position:"Intern", employee_monthlySalary:"15000"},

    {employee_ID:"E-2021-5", employee_firstName:"Michael", employee_middleName:"Reese", employee_lastName:"Bryce", employee_gender:"Male", 
    employee_birthDate: new Date("1999-05-10") , employee_age:"22", employee_contactNumber:"09234567894", employee_emailAddress:"thebodyguard@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Finance", 
    employee_position:"Intern", employee_monthlySalary:"18000"},

    {employee_ID:"E-2021-6", employee_firstName:"Christian", employee_middleName:"Lion", employee_lastName:"Wolff", employee_gender:"Male", 
    employee_birthDate: new Date("1999-10-26") , employee_age:"21", employee_contactNumber:"09234567895", employee_emailAddress:"theaccountant@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Staff", 
    employee_position:"Security", employee_monthlySalary:"15000"},

    {employee_ID:"E-2021-7", employee_firstName:"Brax", employee_middleName:"Lion", employee_lastName:"Wolff", employee_gender:"Male", 
    employee_birthDate: new Date("1999-11-21") , employee_age:"21", employee_contactNumber:"09234567896", employee_emailAddress:"accountantsbrother@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Faculty", 
    employee_position:"Teacher", employee_monthlySalary:"18000"},

    {employee_ID:"E-2021-8", employee_firstName:"Tyler", employee_middleName:"Unknown", employee_lastName:"Rake", employee_gender:"Male", 
    employee_birthDate: new Date("1999-10-19") , employee_age:"21", employee_contactNumber:"09234567897", employee_emailAddress:"theextractor@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Accounting", 
    employee_position:"Intern", employee_monthlySalary:"18000"},

    {employee_ID:"E-2021-9", employee_firstName:"Daniel", employee_middleName:"Denver", employee_lastName:"Ramos", employee_gender:"Male", 
    employee_birthDate: new Date("1999-03-16") , employee_age:"22", employee_contactNumber:"09234567898", employee_emailAddress:"denver@g.cjc.edu.ph", 
    employee_city:"Hagonoy", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Staff", 
    employee_position:"Security", employee_monthlySalary:"18000"},

    {employee_ID:"E-2021-10", employee_firstName:"Agata", employee_middleName:"Nairobi", employee_lastName:"Jimenez", employee_gender:"Female", 
    employee_birthDate: new Date("1999-08-23") , employee_age:"21", employee_contactNumber:"09234567899", employee_emailAddress:"nairobi@g.cjc.edu.ph", 
    employee_city:"Digos City", employee_province:"Davao del Sur",  employee_country:"Philippines", employee_officeAssignment:"Faculty", 
    employee_position:"Teacher", employee_monthlySalary:"18000"},

]