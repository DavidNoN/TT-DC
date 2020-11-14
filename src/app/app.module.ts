import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HomeComponent } from './pages/home/home.component';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumListComponent } from './pages/album-list/album-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './pages/album-list/album/album.component';
import { SongsComponent } from './pages/album-list/album/songs/songs.component';
import { ListeningComponent } from './pages/home/listening/listening.component';


@NgModule( {
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomeComponent,
    AlbumListComponent,
    FooterComponent,
    AlbumComponent,
    SongsComponent,
    ListeningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ DatePipe ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
