import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css'],
  providers: [AuthService]
})
export class LoginPagesComponent implements OnInit {

bussy= false;
loginForm: any;

constructor(private fb: FormBuilder,
            private router: Router,
            private authService: AuthService,
            private cryptoService: CryptoService){

}


  ngOnInit(): void {
    this.buildLoginForm();
  }



  buildLoginForm(){
      this.loginForm = this.fb.group({
        user: ['',[Validators.required]],
        password: ['',[Validators.required, Validators.minLength(2)]]
      })
  }


  authorize(submittedForm: FormGroup){
    console.log('Enter to authorize');
    this.bussy= true;

    const request = {
      user:     this.loginForm.value.user,
      password: this.cryptoService.encryption( this.loginForm.value.password )
    };

    console.log('user:'+request.user);
    console.log('password:'+request.password);

    this.authService.loginUser(request.user,request.password).subscribe((data: any)=>{

      this.bussy = false;
      if(data){
       // localStorage.setItem('id_token',data.accessToken);
        //Verify Session of the user

        console.log('token: ',data);
        //if(all is OK)
        this.router.navigate(['/db'])

      }


    }, (error: any)=>{
        this.bussy= false;
        console.log('error:', error);
        return;
        //this.alert.error('Invalid Information');

    });




    //this.router.navigate(['/db'])

  }


}
