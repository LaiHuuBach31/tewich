import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareServiceComponent } from './pages/care-service/care-service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreatPrescriptionComponent } from './pages/creat-prescription/creat-prescription.component';
import { DetailDoctorComponent } from './pages/detail-doctor/detail-doctor.component';
import { HomeComponent } from './pages/home/home.component';
import { ListDoctorComponent } from './pages/list-doctor/list-doctor.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [
  {path:'',component:CustomerComponent,children:[
    {path:'', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'blog', component:BlogComponent},
    {path:'care-service', component:CareServiceComponent},
    {path:'creat-prescription', component:CreatPrescriptionComponent},
    {path:'detail-doctor/:id', component:DetailDoctorComponent},
    {path:'list-doctor', component:ListDoctorComponent},
    {path:'booking', component:ReservationComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
