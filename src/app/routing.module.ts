import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Root } from './app.component';
import { Form } from './form/form.component';
import { Home } from './home/home.component';


const routes: Routes = [
  { path: '', component: Home},
  { path: 'form', component: Form }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class Routing { }

