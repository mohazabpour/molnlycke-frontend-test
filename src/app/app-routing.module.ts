import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '@app/pages/not-found/not-found.component';
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: LayoutComponent,
        children: [
          { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
        ]
      },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: '/not-found' },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
