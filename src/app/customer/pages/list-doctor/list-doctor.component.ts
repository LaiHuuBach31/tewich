import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
list:any
  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.service.getDoctor().subscribe((data)=>{
      this.list = data
      console.log(data);
      
    })
  }


}
