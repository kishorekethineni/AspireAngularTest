import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  userForm=new FormGroup({
    employeeId: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern(/^ACE(?!0000)[0-9]{4}/)]),
    employeeName: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z. ]*[a-zA-Z]{3,60}$/)]),
    dateOfBirth: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    dateOfJoining: new FormControl('', [Validators.required]),

  });
  employeeDetails:any=[];
  employeeDetails1:any=[];

  constructor(public formBuilder: FormBuilder,private employeeservice:EmployeeServiceService) { }

  ngOnInit() {
  //  this.userForm =  this.formBuilder.group({
  //     employeeID: ['', [Validators.required, Validators.minLength(4),Validators.pattern(^ACE(?!0000)[0-9]{4})]],
  //     employeeName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z. ]*[a-zA-Z]{3,60}$/)]],
  //     dateOfBirth: ['', [Validators.required]],
  //     age: ['', [Validators.required]],
  //     phonenumber: ['', [Validators.required]],
  //     email: ['', [Validators.required]],
  //     dateOfJoining: ['', [Validators.required]],
      
  //   })
    this. employeeservice.getEmployeeDetails().subscribe((res:any)=>{
this.employeeDetails=res;
console.log(this.employeeDetails);
    }) 
  }
 
  get getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(){
    this.employeeservice.addCustomer(this.userForm.value).subscribe((res)=>{
      this.employeeDetails1=res;
      console.log(this.employeeDetails1 + "data added successfull");
      })
    // console.log(this.userForm.value);
  }

}
