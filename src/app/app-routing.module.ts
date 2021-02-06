import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePage } from './components/home/home.page';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'detail',
    component: DetailPageComponent
  },
  // {
  //   path: 'home/:bookId',
  //   loadChildren: () => import('./components/detail-page/detail-page.module').then(m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
