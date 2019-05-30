import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MlkmsCommonUiModule } from 'mlkms-common-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MlkmsCommonUiModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
