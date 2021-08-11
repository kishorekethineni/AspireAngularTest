import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent implements OnInit {

  userForm!: FormGroup;
  employeeDetails:any=[];
  employeeDetails1:any=[];
  id = this.router.snapshot.params['id'];
  constructor(public formBuilder: FormBuilder,private employeeservice:EmployeeServiceService,private router:ActivatedRoute,private router1:Router) { }

  ngOnInit() {
    console.log('idd'+this.id);

   this.userForm =  this.formBuilder.group({
      employeeID: ['', [Validators.required, Validators.minLength(4)]],
      employeeName: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      age: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateOfJoining: ['', [Validators.required]],
      
    })
 
this.employeeservice.getDetail(this.id).subscribe((result:any)=>{
  console.log(result + "edit");
  
  // this.user=JSON.stringify(result);
  this.employeeDetails=result;});
  console.log(this.employeeDetails);

  }
  
  
  get getControl(){
    return this.userForm.controls;
  }
  update(){
    this.employeeservice.updateDetails(this.id,this.userForm.value).subscribe((data)=>{
      console.log(data,"updated successfully")
    })
    setTimeout(()=>{
      this.router1.navigate(['/GetEmployeeList']);
      console.log('routingdone')
    },3000);
    
    
  
  }
  
  onSubmit(){
    console.log(this.userForm);
  }

}
