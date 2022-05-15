export class Employee{

    employee_ID: string;
    employee_firstName: string;
    employee_middleName: string;
    employee_lastName: string;
    employee_gender: string;
    employee_birthDate: Date;
    employee_age: string;
    employee_contactNumber: string;
    employee_emailAddress: string;
    employee_city: string;
    employee_province: string;
    employee_country: string;
    employee_officeAssignment: string;
    employee_position: string;
    employee_monthlySalary: string;

    constructor(eID: string, eFirstName: string, eMiddleName: string, eLastName: string, eGender: string, eBirthDate: Date, eAge: string, eContact: string, eEmail: string,
        eCity: string, eProvince: string, eCountry: string, eOffice: string, ePosition: string, eSalary:string){

            this.employee_ID = eID;
            this.employee_firstName = eFirstName;
            this.employee_middleName = eMiddleName;
            this.employee_lastName = eLastName;
            this.employee_gender = eGender;
            this.employee_birthDate = eBirthDate;
            this.employee_age = eAge;
            this.employee_contactNumber = eContact;
            this.employee_emailAddress = eEmail;
            this.employee_city = eCity;
            this.employee_province = eProvince;
            this.employee_country = eCountry;
            this.employee_officeAssignment = eOffice;
            this.employee_position = ePosition;
            this.employee_monthlySalary = eSalary;

    }


}