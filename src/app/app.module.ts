import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent //declare the components...
  ],
  imports: [
    BrowserModule //which components will be used
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
