import { BibliotecariaFormComponent } from './bibliotecaria/bibliotecaria-form/bibliotecaria-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrateleiraListComponent } from './prateleira/prateleira-list/prateleira-list.component';
import { PrateleiraFormComponent } from './prateleira/prateleira-form/prateleira-form.component';
import { BibliotecariaListComponent } from './bibliotecaria/bibliotecaria-list/bibliotecaria-list.component';

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
  },{
    path: 'bibliotecaria',
    component: BibliotecariaListComponent
  },{
    path: 'bibliotecaria/nova',
    component: BibliotecariaFormComponent
  },{
    path: 'bibliotecaria/:id',
    component: BibliotecariaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
