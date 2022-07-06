import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormEntidadeComponent } from './pages/cadastro/form/form-entidade/form-entidade.component';
import { FormEstudanteComponent } from './pages/cadastro/form/form-estudante/form-estudante.component';

import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CardComponent,
    CarouselComponent,
    FooterComponent,
    FormEntidadeComponent,
    FormEstudanteComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports: [NgSelectModule],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTabsModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
