import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./invoice-list/invoice-list.module').then(
            m => m.InvoiceListPageModule
          )
      },
      {
        path: 'detial',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./invoice-detial/invoice-detial.module').then(
            m => m.InvoiceDetialPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
