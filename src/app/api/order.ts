import {Customer} from '@app/api/customer';
import {Product} from '@app/api/product';

export interface order {
  id: number;
  product: Product;
  date: string;
  amount: number;
  quantity: number;
  "customer": Customer;
  "status": string;
}
