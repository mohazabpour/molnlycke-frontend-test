import {HttpClient} from '@angular/common/http';
import {Injectable, computed, inject} from '@angular/core';
import {catchError, map, of, tap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {HttpErrorService} from '@app/utilities/http-error.service';
import {Order, Result} from '@api/order';

@Injectable()
export class OrdersService {
  private ordersUrl = 'assets/data/orders.json';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);

  private ordersResult$ = this.http.get<Order[]>(this.ordersUrl).pipe(
    map((orders) => {
      orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return { data: orders } as Result<Order[]>;
    }),
    tap((result) => console.log(JSON.stringify(result))),
    catchError((err) =>
      of({
        data: [],
        error: this.errorService.formatError(err),
      } as Result<Order[]>),
    ),
  );

  private ordersResult = toSignal(this.ordersResult$, {initialValue: {data: []} as Result<Order[]>});
  orders = computed(() => this.ordersResult().data);
  ordersError = computed(() => this.ordersResult().error);
}
