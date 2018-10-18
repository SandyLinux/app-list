import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
//import { InMemoryDataService }  from './in-memory-data.service';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

#line new added
#line old added


import { AppComponent } from './app.component';
import {MyserviceService} from './myservice.service';
import { NewCompComponent } from './new-comp/new-comp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    ChangeTextDirective,
    SqrtPipe //declare the components...
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'new-comp',
        component:NewCompComponent,
      }
    ]),//which components will be used
  ],
  providers: [
    MyserviceService,
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
