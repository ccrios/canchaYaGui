import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  chart: any;
  chart1: any;
  chart2: any;

  constructor() { }

  ngOnInit() {
    this.columChart();
    this.cakeChart();
    this.rayChart();
    this.chart.render();
    this.chart1.render();
    this.chart2.render();
  }

  columChart() {
    this.chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Reservaciones por semana'
      },
      data: [{
        type: 'column',
        dataPoints: [
          { y: 71, label: 'Lunes' },
          { y: 55, label: 'Martes' },
          { y: 50, label: 'Miércoles' },
          { y: 65, label: 'Jueves' },
          { y: 95, label: 'Viernes' },
          { y: 68, label: 'Sábado' },
          { y: 28, label: 'Domingo' }
        ]
      }]
    });
  }

  cakeChart() {
    this.chart1 = new CanvasJS.Chart('chartContainerCake', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Ganancias por semana'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 450, name: 'Lunes' },
          { y: 120, name: 'Martes' },
          { y: 300, name: 'Miércoles' },
          { y: 800, name: 'Jueves' },
          { y: 150, name: 'Viernes' },
          { y: 150, name: 'Sábado' },
          { y: 250, name: 'Domingo' }
        ]
      }]
    });
  }

  rayChart() {
    const dataPoints = [];
    let y = 0;
    for (let i = 0; i < 10000; i++) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y });
    }
    this.chart2 = new CanvasJS.Chart('chartContainerRay', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Ganancias Totales'
      },
      subtitles: [{
        text: 'Try Zooming and Panning'
      }],
      data: [
        {
          type: 'line',
          dataPoints
        }]
    });
  }
}


