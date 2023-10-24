import { Component, OnInit, ViewChild } from '@angular/core';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
//import { CopyTable } from '../../interfaces/db-processing.interface';
import { DBService } from '../../services/db-processing.service';

import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-db-load-page',
  templateUrl: './db-load-page.component.html',
  styles: [
  ],
  providers: [DBService]
})
export class DbLoadPageComponent implements OnInit {

  bussy: boolean= false;
  dataSource:any;
  displayedColumns:any[] = [];
  showCopyTable: boolean= false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  constructor(private dbService: DBService ,private router: Router){
   
  }


  PersoalIds: any[] = [
    {value: '1', viewValue: 'CURP - Unified Key population Register'},
    {value: '2', viewValue: 'SSN - Social Security Number'}, //
    {value: '3', viewValue: 'NIN - National Insurance Number'},
    {value: '4', viewValue: 'PIN - Personal Identity Number'},
    {value: '5', viewValue: 'AADHARAR - Personal Identification Number'}
  ];


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
      this.displayedColumns = ['username', 'firstName', 'lastName', 'curp', 'passport', 'email'];
    }




    createTable() {
      console.log('Enter createTable');


      this.dbService.getCopiedCustomers().subscribe((resp: any) =>{
      console.log('resp');
      this.showCopyTable = true;  
      console.log(JSON.stringify(resp));
    
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });



   

  }


  copydb(){
    console.log('Enter to copydb');
    this.bussy = true;
    
    this.dbService.copyCustomers().subscribe((response: any)=>{
      
      this.bussy = false;
      console.log(response);
      
      if(response){
        
         
        this.createTable();
       
        //this.router.navigate(['/db'])

      }else{
        console.log('We could not copy data please try later');
        //this.alert.error('We could not copy data please try later');
      }


    }, (error: any)=>{
        this.bussy= false;
        console.log('Service error:', error);
        return;
        //this.alert.error('Invalid Information');

    });





  }

  stagingDB(){
    console.log('Enter to stagingDB');
    this.showCopyTable = false;
    this.router.navigate(['/db/match'])

  }


}


