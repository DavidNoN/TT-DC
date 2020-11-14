import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../../services/music.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: [ './songs.component.scss' ]
} )
export class SongsComponent implements OnInit {

  public song: string;
  private albumParam: string;
  public songs: any;

  constructor( private musicService: MusicService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) {
    this.activatedRoute.params.subscribe( params => {
      this.song = params[ `id` ];
    } );
    console.log( this.song );
  }

  ngOnInit(): void {
    this.albumParam = this.musicService.getAlbumParam();
    this.musicService.getMusic().subscribe( ( resp: any ) => {
      this.songs = resp.data[ this.albumParam ].albums[ this.song ];
    } );
    console.log( this.songs );
  }

  listenSong( songName: string ): void {
    this.musicService.setPlaySong( songName );
    this.router.navigateByUrl( '/home' );
  }

}
