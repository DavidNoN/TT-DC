import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music.service';

import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [ './album.component.scss' ]
} )
export class AlbumComponent implements OnInit {

  public albums: any;
  public artist: string;
  public songFlag: boolean;

  constructor( private musicService: MusicService,
               private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this.artist = params[ `id` ];
    } );
    this.songFlag = false;
  }

  ngOnInit(): void {
    this.musicService.getMusic().subscribe( ( resp: any ) => {
      this.albums = resp.data[ this.artist ];
    } );
  }


  flagSong(): void {
    this.musicService.setAlbumParam( this.artist );
    this.songFlag = true;
  }


}
