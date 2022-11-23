import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    FormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
