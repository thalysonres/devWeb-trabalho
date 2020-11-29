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

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainMenuComponent,
    MainToolbarComponent,
    PrateleiraListComponent,
    PrateleiraFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
