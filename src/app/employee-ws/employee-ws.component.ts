import { EmployeeWsService } from './../employee-ws.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-ws',
  templateUrl: './employee-ws.component.html',
  styleUrls: ['./employee-ws.component.css']
})

export class EmployeeWsComponent implements OnInit {

  constructor(private employeeWsService: EmployeeWsService) {  }
  ngOnInit() {}

  EmployeeListUnclean: any[];
  EmployeeList = [];
  EmployeeToShow = [];
  imageData: string;
  birthYear: string;

  // Substring 104 for removing the "OLE" info, cant find a dynamic version 
  private createImageData(): void {
    if (this.EmployeeToShow.length > 0 ) { 
      this.imageData = "data:image/jpg;base64," + this.EmployeeToShow[0]["Photo"].substring(104);
    };
  }
  
  // Slices the string and keep the year
  private createYear(): void {
    if (this.EmployeeToShow.length > 0 ) { 
      this.birthYear = this.EmployeeToShow[0]["BirthDate"].slice(0,4);
    };
  }
  
  // Extract employees from database
  private getEmpList(): void {
    if (this.EmployeeList.length == 0){
      this.EmployeeListUnclean = this.employeeWsService.getEmpListFromHttp();
    
      for (let employee of this.EmployeeListUnclean["value"]) {      
      this.EmployeeList.push(employee);
      }
    }
  }

  // Clean the list for button
  private emptyList(): void {
    this.EmployeeList = [];
    this.EmployeeToShow = [];
  }

  // Checks which employe to show and then add to show list, if clicked again, then remove
  private onEmpToShow(employeeToShow): void {
    if (this.EmployeeToShow[0] == employeeToShow) {
      this.EmployeeToShow.pop();      
    }
    else {
      this.EmployeeToShow.pop();
      this.EmployeeToShow.push(employeeToShow);
    }
  }  
}
