import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmployeeWsService {
  
  posts: any[];

  // Get the data from Northwind
    constructor(
      private http: Http) { 
        http.get("http://services.odata.org/V3/Northwind/Northwind.svc/Employees")
        .subscribe(response => { 
        this.posts = response.json();
        })
      } 
 
      getEmpListFromHttp() {
      return this.posts;
    }  
}
