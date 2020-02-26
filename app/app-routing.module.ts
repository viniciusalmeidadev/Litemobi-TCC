import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},


  { path: 'linha302-a', loadChildren: './linha302-a/linha302-a.module#Linha302APageModule' },
  { path: 'linha302-b', loadChildren: './linha302-b/linha302-b.module#Linha302BPageModule' },
  { path: 'linha310', loadChildren: './linha310/linha310.module#Linha310PageModule' },
  { path: 'linha311', loadChildren: './linha311/linha311.module#Linha311PageModule' },
  { path: 'linha340', loadChildren: './linha340/linha340.module#Linha340PageModule' },
  { path: 'linha341', loadChildren: './linha341/linha341.module#Linha341PageModule' },
  { path: 'linha342', loadChildren: './linha342/linha342.module#Linha342PageModule' },
  { path: 'map-track', loadChildren: './map-track/map-track.module#MapTrackPageModule' },
  { path: 'funcao-soneca', loadChildren: './funcao-soneca/funcao-soneca.module#FuncaoSonecaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
