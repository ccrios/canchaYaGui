import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    // localStorage.setItem('account_id', '2');
  }

  ngOnInit() {
    // if (this.router.url === '/create-stage') {
    //   //   this.editable = false;
    //   //   this.createStage();
    //   // } else if (this.router.url.includes('/edit-stage')) {
    //   //   this.editable = true;
    //   //   this.editStage();
    //   // }
    // }
  }

}
