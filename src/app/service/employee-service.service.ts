import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {  throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
apiurl="http://ancient-harbor-78065.herokuapp.com/api/employees";


  
  constructor(private http:HttpClient) { }
  public refresh=new Subject<void>();
  
  

  getEmployeeDetails(){
  return  this.http.get(this.apiurl);
  }
  addCustomer(data:any) {
    console.log("data are not geeting");
    return this.http.post(this.apiurl, data)
    .pipe(
      tap(()=>{
        this.refresh.next();
      })
    )
  }
  handelError:any;
  getDetail(id:any) {
    return this.http.get(`${this.apiurl}/${id}`)
    .pipe(
      retry(1),
      catchError(this.handelError)
    )
  } 
  updateDetails(id:any,data:any){
   return this.http.put(`${this.apiurl}/${id}`,data)
  }
  deleteCustomer(id:any){
    return this.http.delete(`${this.apiurl}/${id}`)
    .pipe(
      tap(()=>{
        this.refresh.next();
      })
    )
  }

}


