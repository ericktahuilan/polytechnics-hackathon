import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-pages-db',
  templateUrl: './layout-pages-db.component.html',
  styles: [
  ]
})
export class LayoutPagesDBComponent {


  public sidebarItems = []= [
      { label:'Load Database', icon:'autorenew', url:'./load' },
      { label:'Match Fields', icon:'check_circle', url:'./match' },
      { label:'Processed Results', icon:'backup', url:'./processing' },
  ];


  // <mat-icon>compare_arrows</mat-icon>
  // <mat-icon>contact_support</mat-icon>
  // <mat-icon>face</mat-icon>


}
