import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Product} from '@api/product';
import {CardModule} from 'primeng/card';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardModule,
    Button,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  product = input<Product>();
}
