import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NewsCardService} from '@components/news-card/news-card.service';
import {ProductsService} from '@components/product-card/products.service';
import {OrdersService} from '@components/order-item/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  private newsCardService = inject(NewsCardService);
  private productsService = inject(ProductsService);
  private ordersService = inject(OrdersService);

  //NEWS
  newsCards = this.newsCardService.news;

  //PRODUCTS
  products = this.productsService.products;

  //ORDERS
  orders = this.ordersService.orders;


  responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '992px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
