import { Component, OnInit, ViewChild } from '@angular/core';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
//import { StagingTable } from '../../interfaces/db-processing.interface';
import { MatPaginator } from '@angular/material/paginator';


import {SelectionModel} from '@angular/cdk/collections';
import { StagingCustomerDto } from '../../interfaces/db-processing.interface';

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

  

  columnNames = [
    // {
    //   id: 'select',
    //   value: 'select',
    // },
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


    constructor( private router: Router){  }


    ngOnInit() {
      //this.displayedColumns = this.columnNames.map(x => x.id);
      this.displayedColumns = ['select','guid', 'originalDB'];
      this.createTable3();
    }



    createTable2(){
      console.log('enter to createTable');
    
      //Call service copied 
      
  
    }



  createTableTest2() {
    // let tableArr: StagingTable[] = [
    //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // ];
    // this.dataSource = new MatTableDataSource(tableArr);
    // this.dataSource.sort = this.sort;

    let tableArr = [
      {
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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
        "select": false,
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


     this.dataSource = new MatTableDataSource(tableArr);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;

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

   // this.router.navigate(['/db/processing'])

  }

  cancel(){
    console.log('enter to cancel');
    this.router.navigate(['/db/load'])
  }


  selection = new SelectionModel<StagingCustomerDto>(true, []);


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach( (row: StagingCustomerDto) => this.selection.select(row));
  }








}
