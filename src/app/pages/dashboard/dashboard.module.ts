import {NgModule} from '@angular/core';
import {DashboardComponent} from '@app/pages/dashboard/dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardsRoutingModule} from '@app/pages/dashboard/dashboard-routing.module';
import {CarouselModule} from 'primeng/carousel';
import {NewsCardComponent} from '@components/news-card/news-card.component';
import {SplitterModule} from 'primeng/splitter';
import {NewsCardService} from '@components/news-card/news-card.service';
import {TabViewModule} from 'primeng/tabview';
import {ProductsService} from '@components/product-card/products.service';
import {provideHttpClient} from '@angular/common/http';
import {ProductCardComponent} from '@components/product-card/product-card.component';
import {CalculatorComponent} from '@components/calculator-widget/calculator.component';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    CarouselModule,
    NewsCardComponent,
    SplitterModule,
    TabViewModule,
    ProductCardComponent,
    CalculatorComponent,
    CardModule,
  ],
  declarations: [DashboardComponent],
  providers: [provideHttpClient(), NewsCardService, ProductsService],

})
export class DashboardModule {}
