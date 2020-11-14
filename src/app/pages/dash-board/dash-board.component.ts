import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicService } from '../../services/music.service';

@Component( {
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: [ './dash-board.component.scss' ]
} )
export class DashBoardComponent implements OnInit {


  public loginFlag = false;
  public profileForm: FormGroup;
  public homeFlag = false;
  public name: string;
  public flagForm: boolean;

  constructor( private datePipe: DatePipe,
               private fb: FormBuilder,
               private router: Router,
               private musicService: MusicService ) {
    this.createForm();
    this.flagForm = false;
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.profileForm = this.fb.group( {
      username: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
      password: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
    } );
  }


  logFlag(): void {
    this.loginFlag = !this.loginFlag;
  }

  homeFl(): void {
    if ( this.profileForm.invalid
      || this.profileForm.get( 'username' ).value === ''
      || this.profileForm.get( 'password' ).value === '' ) {
      this.flagForm = true;
      return;
    }
    this.homeFlag = true;
    this.musicService.login( this.profileForm.get( 'username' ).value );
    this.router.navigateByUrl( '/home' ).then();
  }

}
