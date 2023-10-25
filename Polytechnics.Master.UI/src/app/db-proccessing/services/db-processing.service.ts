import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { CopyTable, DbInformation,GuidList,StagingCustomerGuidDto } from '../interfaces/db-processing.interface';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class DBService {
    
    private baseUrl: string = environments.baseUrl;
    
    constructor(private http: HttpClient) { }
    

    getDbInformation():Observable<DbInformation>{

        return this.http.get<DbInformation>(``);
    }


  
    copyCustomers(): Observable<any>{

        console.log('----Enter to copyCustomers-----')
      //const headers = { 'content-type': 'application/json'}
      //const headers = { 'accept': '*/*'}
      //const headers = { responseType: 'text'}
      const headers = { 'content-type': 'plain/text'}
      const body= ''; 
      console.log(body)

        return this.http.post(`${ this.baseUrl}/copy/customers`,body, 
        {'headers':headers, responseType: 'text'});

       

        /*
        Response body: Data copied successfully.


        access-control-allow-origin: * 
        content-type: text/plain; charset=utf-8 
        date: Sat,21 Oct 2023 21:37:31 GMT 
        server: Kestrel 
        */

    }


    getCopiedCustomers( ): Observable<any>{ 
      console.log('----Enter to getCopiedCustomers-----')
            
      return this.http.get(`${ this.baseUrl}/copied/customers`);

    }




      getCopiedCustomersTest( ): any{ 

            var copied = [
                {
                  "guid": "",
                  "originalDB": "AssetsManagement",
                  "originalDBID": "1",
                  "username": "jdoe",
                  "firstName": "John",
                  "lastName": "Doe",
                  "curp": null,
                  "passport": "P123456",
                  "email": "john.doe@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "CommercialBanking",
                  "originalDBID": "125",
                  "username": "jdoe",
                  "firstName": "John",
                  "lastName": "Doe",
                  "curp": null,
                  "passport": "P123456",
                  "email": "john.doe@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "InsurancesServices",
                  "originalDBID": "137",
                  "username": "jdoe",
                  "firstName": "John",
                  "lastName": "Doe",
                  "curp": null,
                  "passport": "P123456",
                  "email": "john.doe@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "CommercialBanking",
                  "originalDBID": "2",
                  "username": "mperez",
                  "firstName": "Maria",
                  "lastName": "Perez Ramos",
                  "curp": null,
                  "passport": "CA003547943",
                  "email": "maria.p@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "InsurancesServices",
                  "originalDBID": "2",
                  "username": "mperez",
                  "firstName": "Maria",
                  "lastName": "Perez Ramos",
                  "curp": null,
                  "passport": "CA003547943",
                  "email": "maria.p@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "InsurancesServices",
                  "originalDBID": "3",
                  "username": "rjuare",
                  "firstName": "Roberto",
                  "lastName": "Juarez Gomez",
                  "curp": "JUGR800610HMNRBO04",
                  "passport": "MX003547944",
                  "email": "roberto.j@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "AssetsManagement",
                  "originalDBID": "12",
                  "username": "rjuare",
                  "firstName": "Roberto",
                  "lastName": "Juarez Gomez",
                  "curp": "JUGR800610HMNRBO04",
                  "passport": "MX003547944",
                  "email": "roberto.j@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "InsurancesServices",
                  "originalDBID": "5",
                  "username": "rjuare",
                  "firstName": "Roberto",
                  "lastName": "Juarez Gomez",
                  "curp": "JUGR800610HMNRBO04",
                  "passport": "MX003547944",
                  "email": "roberto.j@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "RetailBanking",
                  "originalDBID": "117",
                  "username": "rjuare",
                  "firstName": "Roberto",
                  "lastName": "Juarez Gomez",
                  "curp": "JUGR800610HMNRBO04",
                  "passport": "MX003547944",
                  "email": "roberto.j@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "InsurancesServices",
                  "originalDBID": "412",
                  "username": "gvasqu",
                  "firstName": "Gabriela",
                  "lastName": "Vasquez Hernandez",
                  "curp": "VASH901025MDFTSN05",
                  "passport": null,
                  "email": "gabriela.v@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "RetailBanking",
                  "originalDBID": "467",
                  "username": "gvasqu",
                  "firstName": "Gabriela",
                  "lastName": "Vasquez Hernandez",
                  "curp": "VASH901025MDFTSN05",
                  "passport": null,
                  "email": "gabriela.v@email.com"
                },
                {
                  "guid": "",
                  "originalDB": "AssetsManagement",
                  "originalDBID": "53",
                  "username": "amendo",
                  "firstName": "Alberto",
                  "lastName": "Mendoza Lira",
                  "curp": null,
                  "passport": "EU003547946",
                  "email": "alberto.m@email.com"
                }
              ];


                return copied;
            

      }




      confirmStaging(  ): Observable<any>{
        console.log('----Enter to confirmStaging-----');

        // const headers = { 'content-type': 'application/json'}
        // const body= ''; 
        // console.log(body)
  
        //   return this.http.post(`${ this.baseUrl}/confirm/staging`,body,{'headers':headers});

          const headers = { 'content-type': 'plain/text'}
          const body= ''; 
          console.log(body)
    
            return this.http.post(`${ this.baseUrl}/confirm/staging`,body, 
            {'headers':headers, responseType: 'text'});
    
           


      }
  
  
      getStaging(  ): Observable<any>{ 
        console.log('----Enter to getStaging-----');
            return this.http.get(`${ this.baseUrl}/staging/customers`);
        }
  




        finalizeCustomers(listGuids: string ): Observable<any>{
            console.log('----Enter to finalizeCustomers-----');

            const headers = { 'content-type': 'application/json'}
            const body= listGuids; 
            console.log(body)
      
              return this.http.post(`${ this.baseUrl}/finalize/customers`,body,{'headers':headers, responseType: 'text'});
          }
      
      
          getFinalized(  ): Observable<any>{ 
            console.log('----Enter to getFinalized-----')
                return this.http.get(`${ this.baseUrl}/finalized/customers`);
            }
      


}
