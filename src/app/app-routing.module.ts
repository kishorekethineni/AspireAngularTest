import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';

const routes: Routes = [
  {path:"Home",component:AppComponent},
  {path:"GetEmployeeList",component:EmployeeDetailsComponent},
  {path:"CreateEmployee",component:CreateEmployeeComponent},
  {path:"UpdateEmployeeDetails",component:UpdateEmployeeDetailsComponent},
  {path:"UpdateEmployeeDetails/:id",component:UpdateEmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
