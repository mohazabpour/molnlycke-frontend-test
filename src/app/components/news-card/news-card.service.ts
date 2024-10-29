import {HttpClient} from '@angular/common/http';
import {Injectable, computed, inject} from '@angular/core';
import {catchError, map, of, tap} from 'rxjs';
import {News, Result} from '@api/news';
import {toSignal} from '@angular/core/rxjs-interop';
import {HttpErrorService} from '@app/utilities/http-error.service';

@Injectable()
export class NewsCardService {
	private newsUrl = 'assets/data/news.json';
	private http = inject(HttpClient);
	private errorService = inject(HttpErrorService);

	private newsResult$ = this.http.get<News[]>(this.newsUrl).pipe(
		map((p) => ({data: p}) as Result<News[]>),
		tap((p) => console.log(JSON.stringify(p))),
		catchError((err) =>
			of({
				data: [],
				error: this.errorService.formatError(err),
			} as Result<News[]>),
		),
	);
	private newsResult = toSignal(this.newsResult$, {initialValue: {data: []} as Result<News[]>});
	news = computed(() => this.newsResult().data);
	newsError = computed(() => this.newsResult().error);
}
