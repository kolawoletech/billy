import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import CustomersComponent from '../features/customers/customers-list/customers-list.component';

import NotFoundComponent from '../features/static/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create',
  },
  {
    component: CustomersComponent,
    path: 'customers',
  },
  {
    component: NotFoundComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
