import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

//import { Guard } from "guard.service";

import { AppComponent } from './app.component';
//import { FileUploadComponent } from './fileupload/fileupload.component';

//const appRoutes: Routes = [
//    { path: 'fileupload', component: FileUploadComponent }
//];

@NgModule({
  declarations: [
      AppComponent//,
      //FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule//,
      //RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
