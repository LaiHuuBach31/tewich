import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techwiz';
  customOptions1: OwlOptions  = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,        
    navSpeed: 300,
    margin:20,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      769: {
        items: 3
      },
      940: {
        items: 4
      },
      2500:{
        items:5
      }
    },
    nav: true
  }
}
