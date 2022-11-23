import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListDoctorComponent } from './pages/list-doctor/list-doctor.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailDoctorComponent } from './pages/detail-doctor/detail-doctor.component';
import { CareServiceComponent } from './pages/care-service/care-service.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CreatPrescriptionComponent } from './pages/creat-prescription/creat-prescription.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ListDoctorComponent,
    BlogComponent,
    DetailDoctorComponent,
    CareServiceComponent,
    ReservationComponent,
    CreatPrescriptionComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
