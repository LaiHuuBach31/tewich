import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerModule } from './customer/customer.module';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
  {path:'form',loadChildren:()=>import('./form/form.module').then(m=>m.FormModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
