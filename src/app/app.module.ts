import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import {FormComponent} from './form.component';
import {DataComponent} from './data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([{path:'',component:FormComponent},
{path:'data/:email/:select/:psw', component:DataComponent}]) ],
  declarations: [ AppComponent ,FormComponent,DataComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
