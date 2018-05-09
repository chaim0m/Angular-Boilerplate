import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Root } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from './routing.module';
import { AngularMaterial } from './modules/angular-material.module';
import { Forms } from './modules/forms.module';
import { Form } from './form/form.component';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home.component';


@NgModule({
  declarations: [
    Root,
    Form,
    Home
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterial,
    Routing
  ],
  providers: [],
  bootstrap: [Root]
})
export class AppModule { }
