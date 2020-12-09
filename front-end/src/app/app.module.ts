import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'

import { MaterialModule } from './material/material.module';
import { PrateleiraListComponent } from './prateleira/prateleira-list/prateleira-list.component';
import { PrateleiraFormComponent } from './prateleira/prateleira-form/prateleira-form.component';
import { FormsModule } from '@angular/forms';
import { BibliotecariaListComponent } from './bibliotecaria/bibliotecaria-list/bibliotecaria-list.component';
import { BibliotecariaFormComponent } from './bibliotecaria/bibliotecaria-form/bibliotecaria-form.component';
import { AutorListComponent } from './autor/autor-list/autor-list.component';
import { AutorFormComponent } from './autor/autor-form/autor-form.component';
import { ObraListComponent } from './obra/obra-list/obra-list.component';
import { ObraFormComponent } from './obra/obra-form/obra-form.component';
import { EmprestimoListComponent } from './emprestimo/emprestimo-list/emprestimo-list.component';
import { EmprestimoFormComponent } from './emprestimo/emprestimo-form/emprestimo-form.component';
import { EstudanteFormComponent } from './estudante/estudante-form/estudante-form.component';
import { EstudanteListComponent } from './estudante/estudante-list/estudante-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { Moment } from 'moment'
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainMenuComponent,
    MainToolbarComponent,
    PrateleiraListComponent,
    PrateleiraFormComponent,
    BibliotecariaListComponent,
    BibliotecariaFormComponent,
    AutorListComponent,
    AutorFormComponent,
    ObraListComponent,
    ObraFormComponent,
    EmprestimoListComponent,
    EmprestimoFormComponent,
    EstudanteFormComponent,
    EstudanteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()

  ],
  providers: [

    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
