import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'DashBoard',
        icon: 'pi pi-chart-bar',
      },
      {
        label: 'Libros',
        icon: 'pi pi-file-o',
        items: [
          {
            label: 'Categorias',
            icon: 'pi pi-copy'
          },
          {
            label: 'Autores',
            icon: 'pi pi-user'
          }
        ]
      }
    ];
  }

}
