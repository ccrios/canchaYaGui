import { Component, OnInit, Input } from '@angular/core';
import { StageService } from 'src/app/services/stage.service';
import { Router } from '@angular/router';
import { OccupationService } from 'src/app/services/occupation.service';

@Component({
  selector: 'app-list-stages',
  templateUrl: './list-stages.component.html',
  styleUrls: ['./list-stages.component.scss']
})
export class ListStagesComponent implements OnInit {
  public stages = new Array();
  currentDetailsStage: any;

  constructor(private stageService: StageService,
              private router: Router
  ) { }

  ngOnInit() {
    this.listStages();
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

