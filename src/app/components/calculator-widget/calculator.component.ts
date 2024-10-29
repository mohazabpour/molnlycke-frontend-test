import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {CardModule} from 'primeng/card';
import {SliderModule} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CardModule,
    SliderModule,
    FormsModule,
    InputTextModule,
    DividerModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent {

  perOrder= signal(0);
  perYear = signal(0);

  perOrderComputed = computed(() => (this.perOrder() * 2) + this.perYearComputed());
  perYearComputed = computed(() => (this.perYear() * 3) + this.perOrder());
}
