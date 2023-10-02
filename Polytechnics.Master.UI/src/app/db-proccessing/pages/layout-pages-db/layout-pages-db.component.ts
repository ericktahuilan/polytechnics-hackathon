import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-pages-db',
  templateUrl: './layout-pages-db.component.html',
  styles: [
  ]
})
export class LayoutPagesDBComponent {


  public sidebarItems = []= [
      { label:'Load Database', icon:'database', url:'./load' },
      { label:'Match Fields', icon:'maker-check', url:'./match' },
      { label:'Process Database', icon:'database-sync', url:'./processing' },
  ];


//autorenew

}
