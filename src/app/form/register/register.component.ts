import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor( private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() { 
    if (this.formData.valid) {
      let acc :any = []
      acc.push(this.formData.value)
      console.log(acc)
      let data:any = JSON.stringify(acc)
      localStorage.setItem('account',data)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/form'])
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    
  }

  get f(): any {
    return this.formData.controls;
  }
  

}
