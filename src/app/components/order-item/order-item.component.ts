import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Order} from '@api/order';
import {TagModule} from 'primeng/tag';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [
    TagModule,
  ],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItemComponent {

  order = input<Order>();

  getStatusType(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'RETURNED':
        return 'contrast';
      case 'DELIVERED':
        return 'success';
      case 'CANCELLED':
        return 'danger';
      default:
        return 'contrast';
    }
  }
}
