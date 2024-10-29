import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NewsCardService} from '@components/news-card/news-card.service';
import {ProductsService} from '@components/product-card/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  private newsCardService = inject(NewsCardService);
  private productsService = inject(ProductsService);

  //NEWS
  newsCards = this.newsCardService.news;

  //PRODUCTS
  products = this.productsService.products;
}
