import { EmployeeWsService } from './employee-ws.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { EmployeeWsComponent } from './employee-ws/employee-ws.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeWsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularDraggableModule
  ],
  providers: [EmployeeWsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
