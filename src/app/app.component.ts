import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';


import {Userresponse} from './userresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 4 project';
  months = ['January','Feburary',"March", "April", "May", 
    "June", "July", "August", "September",
    "October", "November", "December"
  ];
  isAvai = true;

  a = 0 
  todaydate = new Date();
  jsonval = {name:'Rox', age:25, address:{
    a1:'1 main street',
    a2:'2 queen street'
  }};

  myclickFun(event){
    alert('button is click'+this.ndate);
    console.log(event);
  }

  changeMonth(event){
    console.log("change month ");
    console.log(event);
  }
  ndate;
  componentProperty ;
  customerdata;
  httpdata;
  names;
  city;
  displaydata(data){
    console.log(data);
    this.httpdata = data;
  }
  constructor(private myservice:MyserviceService,
      private http:HttpClient){
  }
  
  params=3;

  ngOnInit(){

    this.http.get("http://jsonplaceholder.typicode.com/users").
      subscribe((data) =>{
        this.displaydata(data);
      });
  
    /*this.http.get<Userresponse>("https://api.github.com/users/seeschweiler").
    
      subscribe(
        data =>{
        console.log(data);
        this.customerdata = data.company;
        console.log(data.login);
       
        },
        (err:HttpErrorResponse)=>{
          if (err.error instanceof Error){
            console.log('client error code '+ err);
          }else{
            console.log('server error code ' + typeof(err.error));
          }
        }
      );
      this.http.post(
        'http://jsonplaceholder.typicode.com/posts',{
          title:'new post',
          body:'new post body werwerwe',
          userId:1
  
        })
        .subscribe(
          res=>{
            console.log('feedback is :' + res);
          }
          , 
          err=>{
            console.log('error is :'+err);
          }
      );
    */
    this.ndate = this.myservice.showTodayDate();
    console.log('service property is '+ this.myservice.serviceproperty);

    this.myservice.serviceproperty = 'APP component created';
    this.componentProperty = this.myservice.serviceproperty;

  }
  emails;
  onClickSubmit(data){
    this.emails = data.emailid;

  }
}
