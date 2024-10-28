import {NgModule} from '@angular/core';
import {DashboardComponent} from '@app/pages/dashboard/dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardsRoutingModule} from '@app/pages/dashboard/dashboard-routing.module';

@NgModule({
    imports: [
      CommonModule,
      DashboardsRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
