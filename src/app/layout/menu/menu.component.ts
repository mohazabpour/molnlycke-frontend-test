import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor() {}

  ngOnInit() {
    this.model = [
      {
        label: 'Dashboard',
        items: [
          { label: 'My dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
          { label: 'Your dashboard', icon: 'pi pi-fw pi-crown', routerLink: ['/dashboard/your-dashboard'] }
        ]
      },
      {
        label: 'Products',
        items: [
          { label: 'All products', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/products/products-list'] },
          { label: 'My favourites', icon: 'pi pi-fw pi-bookmark', routerLink: ['/products/favourites'] },
          { label: 'Boring products', icon: 'pi pi-fw pi-hammer', routerLink: ['/products/boring-products'] }
        ]
      },
      {
        label: 'Orders',
        items: [
          { label: 'All orders', icon: 'pi pi-fw pi-database', routerLink: ['/orders/orders-list'], },
          { label: 'Upcoming orders', icon: 'pi pi-fw pi-credit-card', routerLink: ['/orders/upcoming'], badge: 'NEW' },
          { label: 'Completed orders', icon: 'pi pi-fw pi-receipt', routerLink: ['/orders/completed'], },
        ]
      },
    ];
  }
}
