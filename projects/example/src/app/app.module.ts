import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserTemplateAngularModule } from 'user-template-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserTemplateAngularModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
