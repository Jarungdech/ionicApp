import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'app',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'invoice-list', loadChildren: './invoices/invoice-list/invoice-list.module#InvoiceListPageModule' },
  { path: 'invoice-detial', loadChildren: './invoices/invoice-detial/invoice-detial.module#InvoiceDetialPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
