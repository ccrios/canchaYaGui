import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  opened: boolean;
  constructor() {
    this.opened = true;
   }

  ngOnInit() {
  }

}
