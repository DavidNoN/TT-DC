import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Observable } from 'rxjs';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

  public name: string;
  public data$: Observable<any>;
  public albList;
  public flagListening: boolean;
  public nameSong: string;

  constructor( private musicService: MusicService ) {
    this.name = this.musicService.getName();
    this.albList = false;
    this.flagListening = false;
  }

  ngOnInit(): void {
    this.nameSong = this.musicService.playSong;
    if ( this.nameSong === undefined ) {
      this.flagListening = false;
    } else {
      this.flagListening = true;
    }
  }

  apiMusic(): void {
    this.data$ = this.musicService.getMusic();
    this.albList = true;
  }

}
