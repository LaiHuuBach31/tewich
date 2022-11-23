import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = './assets/data/doctor.json'
const urlBolg = './assets/data/blog.json'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
   }
  getDoctor():Observable<any>{
    return this.http.get<any>(url)
  }
  getBlog():Observable<any>{
    return this.http.get<any>(urlBolg)
  }
  getItem(id:number):Observable<any>{
    let doctor:any = []
    doctor = this.getDoctor
    let data:any =  doctor.find((item:any)=>{
      return id == item.id
    })
    return data
  }
}
