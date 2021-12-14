import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'p-recuperar-password',
    loadChildren: () => import('./pages/p-recuperar-password/p-recuperar-password.module').then( m => m.PRecuperarPasswordPageModule)
  },
  {
    path: 'p-menu-usuario',
    loadChildren: () => import('./pages/p-menu-usuario/p-menu-usuario.module').then( m => m.PMenuUsuarioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'p-menu-conductor',
    loadChildren: () => import('./pages/p-menu-conductor/p-menu-conductor.module').then( m => m.PMenuConductorPageModule)
  },
  {
    path: 'p-menu-principal',
    loadChildren: () => import('./pages/p-menu-principal/p-menu-principal.module').then( m => m.PMenuPrincipalPageModule)
  },
  {
    path: 'p-nueva-ruta',
    loadChildren: () => import('./pages/p-nueva-ruta/p-nueva-ruta.module').then( m => m.PNuevaRutaPageModule)
  },
  {
    path: 'inf-de-los-viajes',
    loadChildren: () => import('./pages/inf-de-los-viajes/inf-de-los-viajes.module').then( m => m.InfDeLosViajesPageModule)
  },
  {
    path: 'p-historial-viajes',
    loadChildren: () => import('./pages/p-historial-viajes/p-historial-viajes.module').then( m => m.PHistorialViajesPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
