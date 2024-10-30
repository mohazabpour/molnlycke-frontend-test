import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {LayoutService} from '@app/layout/services/layout.service';
import {Order} from '@app/api/order';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  items!: MenuItem[];

  orders: Order[] = [];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  @ViewChild('topbarmainmenu') mainMenu!: ElementRef;

  constructor(public layoutService: LayoutService) {}

}
