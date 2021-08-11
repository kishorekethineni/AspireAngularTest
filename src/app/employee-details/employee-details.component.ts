import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails:any=[];

  constructor(private employeeservice:EmployeeServiceService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this. employeeservice.getEmployeeDetails().subscribe((res:any)=>{
      this.employeeDetails=res;
      console.log(this.employeeDetails);
          }) 
  }
  deleteRow(x:any){
  
    this.employeeDetails.splice(x, 1 );
  
} 
id:any;
deleteResto(resto:  any){
  if(confirm("Are you sure to delete: "+resto)){
  this.employeeDetails.splice(resto.id,1)
  this.employeeservice.deleteCustomer(this.id).subscribe((result:any)=>{
    console.log("data is deleted successful",result)
    
  })
}

}
}
