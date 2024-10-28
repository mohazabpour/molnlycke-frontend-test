import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {

}
