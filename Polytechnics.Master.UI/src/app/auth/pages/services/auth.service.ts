import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserMDM } from '../interfaces/auth.interface';
import { environments } from 'src/environments/environments';

import { CredentialsDTO, InfoUserDTO } from 'src/app/models/auth.models';



@Injectable({providedIn: 'root'})
export class AuthService {

  // Alt+96 to get:  ``
  constructor(private http: HttpClient) { }

    private baseUrl: string = environments.baseUrl;



    loginUser( user: string,  password:string ): Observable<InfoUserDTO>{

     var userToValidate: CredentialsDTO;
     userToValidate =  new CredentialsDTO();
     userToValidate.user = user;
     userToValidate.password = password;

      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(userToValidate);
      console.log(body)

        return this.http.post<InfoUserDTO>(`${ this.baseUrl}/login`,body,{'headers':headers});
    }



    getToken(){

        let currentUser = sessionStorage.getItem('currentUser');

        if(currentUser != null)
        return  JSON.parse(currentUser).token;
        else
        return 'AAABBBBCCCCDDDD';
        //return null;
    }


    logout(){
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('UserRol');
    }


}
