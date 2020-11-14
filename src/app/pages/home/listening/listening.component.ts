import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: [ './listening.component.scss' ]
} )
export class ListeningComponent implements OnInit {

  @Input() songName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
