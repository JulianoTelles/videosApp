import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'liga-justica',
    loadChildren: () => import('./filmes/liga-justica/liga-justica.module').then( m => m.LigaJusticaPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'godzilla-kong',
    loadChildren: () => import('./filmes/godzilla-kong/godzilla-kong.module').then( m => m.GodzillaKongPageModule)
  },
  {
    path: 'sem-remorso',
    loadChildren: () => import('./filmes/sem-remorso/sem-remorso.module').then( m => m.SemRemorsoPageModule)
  },
  {
    path: 'raya-ultimo',
    loadChildren: () => import('./filmes/raya-ultimo/raya-ultimo.module').then( m => m.RayaUltimoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
