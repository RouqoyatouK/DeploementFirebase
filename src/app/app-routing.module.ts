import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'essai',
    loadChildren: () => import('./essai/essai.module').then( m => m.EssaiPageModule)
  },
  {
    path: 'dosssier',
    loadChildren: () => import('./Karim/dosssier/dosssier.module').then( m => m.DosssierPageModule)
  },
  {
    path: 'essai',
    loadChildren: () => import('./Principal/essai/essai.module').then( m => m.EssaiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
