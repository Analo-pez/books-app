import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DetailPageComponent } from '../detail-page/detail-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    
  },
  {
    path: 'home/:bookId',
    component: DetailPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
