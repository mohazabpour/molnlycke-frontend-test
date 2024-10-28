import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {LayoutService} from '@app/layout/services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
