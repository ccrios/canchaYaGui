import { Component, OnInit, Input } from '@angular/core';
import { StageService } from 'src/app/services/stage.service';


@Component({
  selector: 'app-list-stages',
  templateUrl: './list-stages.component.html',
  styleUrls: ['./list-stages.component.scss']
})
export class ListStagesComponent implements OnInit {

  editable: boolean;

  public stages = new Array();

  constructor(private stageService: StageService) { }

  ngOnInit() {
    this.listStages();
  }

  public listStages() {
    this.stageService.listStages().subscribe(res => {
      console.log('entro ');
      this.stages = res['resStages'].stages;
      console.log(res);
    });
  }

}
