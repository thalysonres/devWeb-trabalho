import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrateleiraListComponent } from './prateleira/prateleira-list/prateleira-list.component';
import { PrateleiraFormComponent } from './prateleira/prateleira-form/prateleira-form.component';

const routes: Routes = [
  {
    path: 'prateleira',
    component: PrateleiraListComponent
  },
  {
    path: 'prateleira/nova',
    component: PrateleiraFormComponent
  },
  {
    path: 'prateleira/:id',
    component: PrateleiraFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
