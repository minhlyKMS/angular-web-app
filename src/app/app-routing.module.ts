import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomePageComponent,
  PageNotFoundComponent,
  ProductsComponent,
  ProductDetailComponent
} from './components';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
