<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  opened: boolean;
  rol: any;
  name: any;
  id: string;
  constructor(
    private auth: AuthService,
  ) {
    this.opened = true;
    this.id = localStorage.getItem('account_id');
   }

  ngOnInit() {
   this.rol = this.auth.getRol();
   this.name = this.auth.getname();
  }

}
