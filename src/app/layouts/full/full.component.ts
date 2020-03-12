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
  constructor(
    private auth: AuthService,
  ) {
    this.opened = true;
   }

  ngOnInit() {
   this.rol = this.auth.getRol();
   this.name = this.auth.getname();
  }



}
