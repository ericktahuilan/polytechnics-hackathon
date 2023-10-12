import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { DbInformation } from '../interfaces/db-processing.interface';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class ServiceNameService {
    
    private baseUrl: string = environments.baseUrl;
    
    constructor(private http: HttpClient) { }
    

    getDbInformation():Observable<DbInformation>{

        return this.http.get<DbInformation>(``);
    }


}
