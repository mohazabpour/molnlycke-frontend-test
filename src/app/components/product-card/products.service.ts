import {HttpClient} from '@angular/common/http';
import {Injectable, computed, inject} from '@angular/core';
import {catchError, map, of, tap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {HttpErrorService} from '@app/utilities/http-error.service';
import {Product, Result} from '@api/product';

@Injectable()
export class ProductsService {
  private productsUrl = 'assets/data/products-small.json';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);

  private productsResult$ = this.http.get<Product[]>(this.productsUrl).pipe(
    map((p) => ({data: p}) as Result<Product[]>),
    tap((p) => console.log(JSON.stringify(p))),
    catchError((err) =>
      of({
        data: [],
        error: this.errorService.formatError(err),
      } as Result<Product[]>),
    ),
  );
  private productsResult = toSignal(this.productsResult$, {initialValue: {data: []} as Result<Product[]>});
  products = computed(() => this.productsResult().data);
  productsError = computed(() => this.productsResult().error);
}
