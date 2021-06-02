import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'blablapiso',
    loadChildren: () => import('./blablapiso/blablapiso.module').then( m => m.BlablapisoPageModule)
  },
  {
    path: 'custommers',
    loadChildren: () => import('./custommers/custommers.module').then( m => m.CustommersPageModule)
  },
  {
    path: 'problem',
    loadChildren: () => import('./problem/problem.module').then( m => m.ProblemPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then( m => m.LegalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
