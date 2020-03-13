import { Component, OnInit, Input } from '@angular/core';
import { StageService } from 'src/app/services/stage.service';
import { Router } from '@angular/router';
import { OccupationService } from 'src/app/services/occupation.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-stages',
  templateUrl: './list-stages.component.html',
  styleUrls: ['./list-stages.component.scss']
})
export class ListStagesComponent implements OnInit {
  public stages = new Array();
  currentDetailsStage: any;
rol:any;
  constructor(private stageService: StageService,
              private router: Router,
              private auth: AuthService
  ) { }

  ngOnInit() {
    this.listStages();
    this.rol = this.auth.getRol();
  }

  public listStages() {
    this.stageService.listStages().subscribe(res => {
      if (res['status']) {
        this.stages = res['resStages'].stages;
      }
    });
  }

  createStage() {
    this.router.navigate(['/create-stage']);
  }
}

