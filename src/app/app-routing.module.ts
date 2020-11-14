import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumComponent } from './pages/album-list/album/album.component';
import { SongsComponent } from './pages/album-list/album/songs/songs.component';

const routes: Routes = [
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'album/:id', component: AlbumComponent,
    children: [
      { path: 'song/:id', component: SongsComponent },
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
