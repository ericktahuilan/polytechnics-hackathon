import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DBService } from '../../services/db-processing.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { GuidList, StagingCustomers } from '../../interfaces/db-processing.interface';



@Component({
  selector: 'app-db-match-fields-page',
  templateUrl: './db-match-fields-page.component.html',
  styles: [
  ]
})
export class DbMatchFieldsPageComponent implements OnInit {


  dataSource:any;
  displayedColumns:any[] = [];
  showCopyTable: boolean= false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<StagingCustomers>(true, []);

  

  columnNames = [
    {
      id: 'guid',
      value: 'guid',
    },
    {
    id: 'originalDB',
    value: 'OriginalDB',

  }, {
    id: 'originalDBID',
    value: 'OriginalDBID',
  },
    {
      id: 'username',
      value: 'Username',
    },
       
    {
      id: 'firstName',
      value: 'FirstName',
    },
    
    {
      id: 'lastName',
      value: 'LastName',
    },
    
    {
      id: 'curp',
      value: 'CURP',
    },
    
    {
      id: 'passport',
      value: 'Passport',
    },
    {
      id: 'email',
      value: 'Email',
    }
  ];


    constructor(private dbService: DBService , private router: Router){  }


    ngOnInit() {
      //this.displayedColumns = this.columnNames.map(x => x.id);
      //this.displayedColumns = ['checked','guid', 'originalDB'];

      this.displayedColumns = ['select','guid','username','firstName','lastName','email'];
      this.createTable();
    }

    


    createTable() {
      console.log('Enter createTable-getStaging');


      this.dbService.getStaging().subscribe((resp: any) =>{
      console.log('getStaging');
      this.showCopyTable = true;  
      console.log(JSON.stringify(resp));
    
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });

  }



  createTable3() {
   
    let tableArr = [
      {
        
        "guid": "51C81750-4CBD-4730-A31A-A0BB97F5DD95",
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
        
        "guid": "51C81750-4CBD-4730-A31A-A0BB97F5DD95",
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
        
        "guid": "51C81750-4CBD-4730-A31A-A0BB97F5DD95",
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
        
        "guid": "9F257867-4646-4876-B5F5-7A20B5BFA5C8",
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
        
        "guid": "9F257867-4646-4876-B5F5-7A20B5BFA5C8",
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
        
        "guid": "3D0EB285-277D-41FB-A2B8-E346366FDC8F",
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
        
        "guid": "3D0EB285-277D-41FB-A2B8-E346366FDC8F",
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
        
        "guid": "3D0EB285-277D-41FB-A2B8-E346366FDC8F",
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
        
        "guid": "3D0EB285-277D-41FB-A2B8-E346366FDC8F",
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
        
        "guid": "34D2DC3A-8293-4740-B839-0BBB8C77E2CC",
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
        
        "guid": "34D2DC3A-8293-4740-B839-0BBB8C77E2CC",
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
        
        "guid": "2F1A3D1A-1484-4CC9-AE55-F81B57578C24",
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

     this.showCopyTable = true;  
     this.dataSource = new MatTableDataSource(tableArr);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;

  }




  save(){
    console.log('enter to save');

    console.log(this.selection);

    let GuidsSelected: GuidList[] = [];  

    
    this.selection.selected.forEach((r,index)=>{
      
      console.log( this.selection.selected[index].guid);
      GuidsSelected.push({"guid":`${r.guid}`});

    });

    let objJsonGuids= JSON.stringify( GuidsSelected );
    console.log( objJsonGuids);


    this.dbService.finalizeCustomers(objJsonGuids).subscribe((response: any)=>{
      
      console.log('finalizeCustomers response: ');
      console.log(response);
      
      if(response){
            this.router.navigate(['/db/processing'])
      }else{
        console.log('We could not finalize data please try later');
        //this.alert.error('We could not finalize data please try later');
      }


    }, (error: any)=>{
        console.log('Service error:', error);
        return;
        //this.alert.error('Invalid Information');

    });



    /*
    [{"guid":"0070D91E-5E56-4811-91FB-13600772256E"},
      {"guid":"00AE8E9D-FDCF-4079-919E-64DA9412185A"},
      {"guid":"011B8E1A-D479-48FF-88D6-386E43B2816B"},
    */


  }

  cancel(){
    console.log('enter to cancel');
    this.router.navigate(['/db/load'])
  }


  

isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}


masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach( (row: StagingCustomers) => this.selection.select(row));
}






}
