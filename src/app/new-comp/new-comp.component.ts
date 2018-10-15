import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './../myservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  newcomponent='new component app'
  ndate = null;
  
  newcomponentproperty;
  constructor(private myservice:MyserviceService,
    private http:HttpClient) { }

  ngOnInit() {
    this.ndate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
    

  }

}
