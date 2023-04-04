import { Component, OnInit, ViewChild } from '@angular/core';
import { NbMenuItem, NbSidebarComponent } from '@nebular/theme';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor() {}

  @ViewChild(NbSidebarComponent) sidebar!: NbSidebarComponent;
  isSidebarCollapsed = true;
  leftArrowIcon = 'arrow-ios-back-outline';
  rightArrowIcon = 'arrow-ios-forward-outline';

  ngOnInit() {
    this.isSidebarCollapsed = true;
  }

  toggleSidebar() {
    this.sidebar.toggle(true);
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboards',
      icon: 'trending-up-outline',
      link: '/dashboards',
      home: true,
    },
    {
      title: 'Imóveis',
      icon: 'home',
      link:'/property',
      children:[
        {
          title: 'Contratos',
          link: '/property/add-property',
        },
        {
          title: 'Para venda',
          link: '/property/sale',
        },
        {
          title: 'Para aluguel',
          link: '/property/rent',
        },

      ]
    },
    {
      title:'clientes',
      icon:'phone',
      link:'/clients'
    },
    {
      title: 'Meus dados',
      icon: 'settings-outline',
      link: '/settings',
    },
  ];
}
