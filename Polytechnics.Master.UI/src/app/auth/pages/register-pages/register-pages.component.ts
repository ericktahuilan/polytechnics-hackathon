import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-pages',
  templateUrl: './register-pages.component.html',
  styleUrls: ['./register-pages.component.css']
})
export class RegisterPagesComponent {

  bussy= false;
  registerForm: any;

constructor(private fb: FormBuilder,
            private router: Router,
            private authService: AuthService){

}


  ngOnInit(): void {
    this.buildLoginForm();
  }



  buildLoginForm(){
      this.registerForm = this.fb.group({
        user: ['',[Validators.required]],
        password: ['',[Validators.required, Validators.minLength(2)]],
        reppassword: ['',[Validators.required, Validators.minLength(2)]]
      })
  }


  registerNewUser(submittedForm: FormGroup){
    console.log('Enter to registerNewUser');
    const request = {
      user:     this.registerForm.value.user,
      password: this.registerForm.value.password,
      reppassword: this.registerForm.value.reppassword
    };

    console.log('user:'+request.user);
    console.log('password:'+request.password);
    console.log('repeat password:'+request.reppassword);

    this.router.navigate(['/db'])

  }


}
