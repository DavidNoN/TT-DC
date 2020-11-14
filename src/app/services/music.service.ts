import { Injectable } from '@angular/core';
import MusicData from '../../assets/Api/Data.json';
import { Observable, of } from 'rxjs';


@Injectable( {
  providedIn: 'root'
} )
export class MusicService {

  private name: string;
  private musicData = MusicData;
  private albumParam: string;
  public playSong: string;

  getName(): string {
    this.name = localStorage.getItem( 'name' );
    return this.name;
  }

  getAlbumParam(): string {
    return this.albumParam;
  }

  constructor() {
  }


  login( name: string ): void {
    this.name = name;
    localStorage.setItem( 'name', this.name );
  }

  getMusic(): Observable<any> {
    return of( this.musicData );
  }

  setAlbumParam( param: string ): void {
    this.albumParam = param;
  }

  setPlaySong( songName: string ): void {
    this.playSong = songName;
  }

}
