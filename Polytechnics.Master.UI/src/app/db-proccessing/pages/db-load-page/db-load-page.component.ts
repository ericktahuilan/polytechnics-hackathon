import { Component, OnInit, ViewChild } from '@angular/core';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CopyTable } from '../../interfaces/db-processing.interface';


@Component({
  selector: 'app-db-load-page',
  templateUrl: './db-load-page.component.html',
  styles: [
  ]
})
export class DbLoadPageComponent implements OnInit {

  dataSource:any;
  displayedColumns:any[] = [];
  showCopyTable: boolean= false;
  //dtCopyDB: any;

  PersoalIds: any[] = [
    {value: '1', viewValue: 'CURP - Unified Key population Register'},
    {value: '2', viewValue: 'SSN - Social Security Number'}, //
    {value: '3', viewValue: 'NIN - National Insurance Number'},
    {value: '4', viewValue: 'PIN - Personal Identity Number'},
    {value: '5', viewValue: 'AADHARAR - Personal Identification Number'}
  ];


  constructor( private router: Router){

  }




  @ViewChild(MatSort) sort!: MatSort;

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'position',
    value: 'No.',

  }, {
    id: 'name',
    value: 'Name',
  },
    {
      id: 'weight',
      value: 'Weight',
    },
    {
      id: 'symbol',
      value: 'Symbol',
    }];


    ngOnInit() {
      this.displayedColumns = this.columnNames.map(x => x.id);
      this.createTable();
    }

  createTable() {
    let tableArr: CopyTable[] = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ];
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }


  copydb(){
    console.log('Enter to copydb');
    this.showCopyTable = true;
  }

  stagingDB(){
    console.log('Enter to stagingDB');
    this.showCopyTable = false;
    this.router.navigate(['/db/match'])

  }


}


