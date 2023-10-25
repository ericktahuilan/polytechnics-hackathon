import { Component, OnInit, ViewChild } from '@angular/core';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FinalizedTable } from '../../interfaces/db-processing.interface';
import { DBService } from '../../services/db-processing.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-db-processing-page',
  templateUrl: './db-processing-page.component.html',
  styles: [
  ]
})
export class DbProcessingPageComponent {

  bussy: boolean= false;
  dataSource:any;
  displayedColumns:any[] = [];
  showCopyTable: boolean= false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  constructor( private dbService: DBService ,private router: Router){

  }

  
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


   

    ngOnInit() {
      //this.displayedColumns = this.columnNames.map(x => x.id);
      this.displayedColumns = ['guid','username', 'firstName', 'lastName', 'curp', 'passport', 'email'];
      this.createTable();
    }




    createTable() {
      console.log('Enter createTable-finalized');


      this.dbService.getFinalized().subscribe((resp: any) =>{
      console.log('finalized');
      this.showCopyTable = true;  
      console.log(JSON.stringify(resp));
    
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });

    
  }




  createTableTest() {
    // let tableArr: FinalizedTable[] = [
    //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // ];
    // this.dataSource = new MatTableDataSource(tableArr);
    // this.dataSource.sort = this.sort;

    let tableArr= [
           
      {
        "guid": "40986B8D-3597-4BA7-8CBC-672FAAABD953",
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
        "guid": "4F88D013-E1A8-4D09-99EB-536D6BBB6119",
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
      // {
      //   "guid": "C9E168D9-E33F-4675-AB0A-9D695755A8F0",
      //   "originalDB": "InsurancesServices",
      //   "originalDBID": "412",
      //   "username": "gvasqu",
      //   "firstName": "Gabriela",
      //   "lastName": "Vasquez Hernandez",
      //   "curp": "VASH901025MDFTSN05",
      //   "passport": null,
      //   "email": "gabriela.v@email.com"
      // },
      // {
      //   "guid": "2072E713-3CCE-4533-89D0-1FA273DB41E3",
      //   "originalDB": "RetailBanking",
      //   "originalDBID": "467",
      //   "username": "gvasqu",
      //   "firstName": "Gabriela",
      //   "lastName": "Vasquez Hernandez",
      //   "curp": "VASH901025MDFTSN05",
      //   "passport": null,
      //   "email": "gabriela.v@email.com"
      // }
      
    ];



    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;

  }



  processTable(){
    console.log('enter to processTable');
    //db/processing
  }





}
