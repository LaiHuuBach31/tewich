import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.component.html',
  styleUrls: ['./detail-doctor.component.css']
})
export class DetailDoctorComponent implements OnInit {
  doctor:any
  constructor(private service:DataService , private actRoute :ActivatedRoute) { }

  ngOnInit(): void {
    let id :any = this.actRoute.snapshot.params['id']
    this.service.getDoctor().subscribe(data=>{
      this.doctor = data.find((item:any)=>{
        return item.id == id
      })
      
      
    })
  }

}
