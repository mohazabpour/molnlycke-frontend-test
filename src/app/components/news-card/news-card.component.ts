import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {CardModule} from 'primeng/card';
import {Button} from 'primeng/button';
import {News} from '@api/news';
import {NgIf} from '@angular/common';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    CardModule,
    Button,
    NgIf,
    Ripple,
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsCardComponent {
  news = input<News>();
}
