import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  opened: boolean;
  id: string;

  constructor() {
    localStorage.setItem('account_id', '1');
    this.opened = true;
    this.id = localStorage.getItem('account_id');
   }

  ngOnInit() {
  }

}
