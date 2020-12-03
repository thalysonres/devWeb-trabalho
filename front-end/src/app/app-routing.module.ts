import { AutorListComponent } from './autor/autor-list/autor-list.component';
import { BibliotecariaFormComponent } from './bibliotecaria/bibliotecaria-form/bibliotecaria-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrateleiraListComponent } from './prateleira/prateleira-list/prateleira-list.component';
import { PrateleiraFormComponent } from './prateleira/prateleira-form/prateleira-form.component';
import { BibliotecariaListComponent } from './bibliotecaria/bibliotecaria-list/bibliotecaria-list.component';
import { AutorFormComponent } from './autor/autor-form/autor-form.component';
import { EstudanteListComponent } from './estudante/estudante-list/estudante-list.component';
import { EstudanteFormComponent } from './estudante/estudante-form/estudante-form.component';
import { EmprestimoListComponent } from './emprestimo/emprestimo-list/emprestimo-list.component';
import { EmprestimoFormComponent } from './emprestimo/emprestimo-form/emprestimo-form.component';
import { ObraListComponent } from './obra/obra-list/obra-list.component';
import { ObraFormComponent } from './obra/obra-form/obra-form.component';

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
  },
  {
    path: 'bibliotecaria',
    component: BibliotecariaListComponent
  },
  {
    path: 'bibliotecaria/nova',
    component: BibliotecariaFormComponent
  },
  {
    path: 'bibliotecaria/:id',
    component: BibliotecariaFormComponent
  },
  {
    path: 'autor',
    component: AutorListComponent
  },
  {
    path: 'autor/novo',
    component: AutorFormComponent
  },
  {
    path: 'autor/:id',
    component: AutorFormComponent
  },
  {
    path: 'estudante',
    component: EstudanteListComponent
  },
  {
    path: 'estudante/novo',
    component: EstudanteFormComponent
  },
  {
    path: 'estudante/:id',
    component: EstudanteFormComponent
  },
  {
    path: 'emprestimo',
    component: EmprestimoListComponent
  },
  {
    path: 'emprestimo/novo',
    component: EmprestimoFormComponent
  },
  {
    path: 'emprestimo/:id',
    component: EmprestimoFormComponent
  },
  {
    path: 'obra',
    component: ObraListComponent
  },
  {
    path: 'obra/novo',
    component: ObraFormComponent
  },
  {
    path: 'obra/:id',
    component: ObraFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
