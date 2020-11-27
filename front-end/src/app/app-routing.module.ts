import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrateleiraListComponent } from './prateleira/prateleira-list/prateleira-list.component';

const routes: Routes = [
  {
    path: 'prateleira',
    component: PrateleiraListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
