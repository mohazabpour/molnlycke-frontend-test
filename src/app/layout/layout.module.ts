import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TopBarComponent } from './topbar/top-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {Ripple} from 'primeng/ripple';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    TopBarComponent,
    SidebarComponent,
  ],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		RouterModule,
		Ripple,
	],
  exports: [LayoutComponent],
})
export class LayoutModule {}
