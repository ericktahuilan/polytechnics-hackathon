import { Component, OnInit, ViewChild } from '@angular/core';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { StagingTable } from '../../interfaces/db-processing.interface';
@Component({
  selector: 'app-db-match-fields-page',
  templateUrl: './db-match-fields-page.component.html',
  styles: [
  ]
})
export class DbMatchFieldsPageComponent implements OnInit {


  dataSource:any;
  displayedColumns:any[] = [];
  //dtCopyDB: any;


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
    let tableArr: StagingTable[] = [
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



  save(){
    console.log('enter to save');
    this.router.navigate(['/db/processing'])

  }

  cancel(){
    console.log('enter to cancel');
    this.router.navigate(['/db/load'])
  }


}
