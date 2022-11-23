import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
list:any
  constructor(private service : DataService) {

   }

  ngOnInit(): void {
    this.service.getBlog().subscribe(data=>{
      this.list = data
    })
  }

}
